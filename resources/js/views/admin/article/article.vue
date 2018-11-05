<template>
    <div class="ivu-layout-pages">
        <!-- <Sider hide-trigger>
            <Menu :active-name="$route.name" theme="light" width="auto" accordion :open-names="['essays']">
                <Submenu name="essays">
                    <template slot="title">
                        <Icon type="ios-book"></Icon>
                        文章管理
                    </template>
                    <MenuItem name="write" to="/admin/article/essays/write">写文章</MenuItem>
                    <MenuItem name="essay" to="/admin/article/essays/essay">文章列表</MenuItem>
                </Submenu>
            </Menu>
        </Sider> -->
        <Layout>
            <!-- <div class="tag-nav-wrapper" style="background: #f0f0f0;height: 40px;padding: 0;">
                <tags-nav :value="$route"></tags-nav>
            </div> -->

            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
    </div>
</template>
<script>
import TagsNav from '@js/components/tags-nav';
export default {
    components: {
        TagsNav
    },
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    methods: {
        
    },
    created(){
        
    }
}
</script>
<style>
.ivu-layout-pages .ivu-layout-sider::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dcdee2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}
</style>


