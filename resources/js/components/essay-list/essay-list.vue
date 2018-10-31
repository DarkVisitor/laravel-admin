<template>
    <div>
        <div v-show="loadEssay">
            <Card :bordered="false" v-for="item in essayList" :key="item.id">
                <div slot="title" class="card-header">
                    <div class="essay-author">
                        <a href="/about">
                            <Avatar src="/img/logo.png" size="small" />
                            <span class="author">Loner</span>
                        </a>                        
                        <span class="essay-by-time">2018-09-01</span>
                    </div>
                    <a :href="createEssayDetailUrl(item.id)" class="essay-title" target="_blank">
                        <h3>{{ item.title }}</h3>
                    </a>
                </div>
                <a :href="createEssayDetailUrl(item.id)" class="card-content" target="_blank">
                    <div class="card-content-avatar">
                        <img :src="item.picture">
                    </div>
                    <div class="card-content-profile">
                        {{item.abstract}}...
                    </div>
                </a>
                <div class="card-footer">
                    <div class="essay-item-tags">
                        <Tag type="border" v-for="tag in item.belongs_to_many_tag" :key="tag.id"><img :src="tag.picture"> {{ tag.title }}</Tag>
                    </div>
                </div>
            </Card>

            <div class="load-more">
                <Button type="default" long v-show="loadMore" @click="loadMorePageEssay">加载更多</Button>
                <div class="load-more-finish" v-show="!loadMore">全部加载完成</div>
            </div>
        </div>
        <div class="essay-not-response" v-show="!loadEssay">
            暂时没有内容
        </div>        
    </div>
</template>
<script>
export default {
    name: 'EssayList',
    data() {
        return {
            loadMore: true,
            loadEssay: false,
            essayList: []
        }
    },
    computed: {
        essays () {
            return this.$store.getters.getWebEssayList;
        },
        page () {
            return this.$store.getters.getWebPageIndex;
        },
        lastPage() {
            return this.$store.getters.getWebPageLast;
        }
    },
    watch: {
        essays (curVal, oldVal) {
            // 监听列表数据，判断是否有数据，并控制提示内容
            if (this.essays.length) this.loadEssay = true;
            //将数据合并到当前数据中
            this.essayList = this.essayList.concat(curVal);
            //判断是否最后一页
            if (this.page >= this.lastPage) this.loadMore = false;
        },
        '$route' (to, from) {
            //当路由切换时，重置数据
            this.loadEssay = false;
            this.essayList = [];
            this.loadMore = true;
            //重新加载数据
            this.$store.dispatch('loadWebEssayList', {page: 1, category: to.name});
        }
    },
    methods: {
        createEssayDetailUrl (id) {
            return '/essay/detail/'+id;
        },
        /**
         * 加载更多数据
         */
        loadMorePageEssay () {
            this.$store.dispatch('loadWebEssayList', {page:this.page+1, category: this.category});
        }
    },
    created() {
        let category = this.$route.name.replace(/\//, '');
        this.$store.dispatch('loadWebEssayList', {page: 1, category: category});
    }
}
</script>
<style>
.essay-title {
    display: block;
    margin-top: 12px;
}
</style>

