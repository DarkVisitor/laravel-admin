<template>
    <div>
        <div class="content-header">
            <Form ref="formSearchData" :model="formSearchParams" inline>
                <FormItem prop="keyword" label='关键字' :label-width="60">
                    <Input type="text" clearable v-model="formSearchParams.keyword" placeholder="请输入" class="header-form-search"></Input>
                </FormItem>
                <FormItem prop="typeid" label='文章分类' :label-width="60">
                    <Select v-model="formSearchParams.typeid" clearable class="header-form-search">
                        <Option v-for="item in categorys" :value="item.id" :key="item.id">{{ item.title }}</Option>
                    </Select>
                </FormItem>
                <FormItem prop="datetime" label="发布时间" :label-width="60">
                    <DatePicker @on-change="changeFormatDateTime" v-model="formSearchParams.datetime" type="daterange" format="yyyy-MM-dd" :options="options2" placement="bottom-end" placeholder="请选择日期" class="header-form-search"></DatePicker>
                </FormItem>
                <FormItem>
                    <Button type="primary" icon="ios-search" @click="handleSubmit('formSearchData')">搜索</Button>
                    <Button type="default" @click="handleReset('formSearchData')">重置</Button>
                </FormItem>
            </Form>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="selection" :columns="columns4" :data="essayList" :border="true">
                <!-- <Page v-if="true" slot="footer" :total="100" show-elevator show-total show-sizer transfer></Page> -->
            </Table>
        </div>
        <div v-if="pageTotal">
            <Page :total="pageTotal" show-elevator show-total show-sizer @on-change="changePage" @on-page-size-change="changePageLimit"></Page>
        </div>
    </div>
</template>

<script>
import EssayAPI from '@/api/essay.js';
export default {
    data () {
        return {
            searchDateTime: '',
            formSearchParams: {
                keyword: '',
                typeid: '',
                datetime: [],
                limit: 10,
                page: 1
            },
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '标题',
                    align: 'center',
                    key: 'title'
                },
                {
                    title: '分类',
                    align: 'center',
                    render: (h, params) => {
                        return h('span', params.row.belongs_to_category.title);
                    }
                },
                {
                    title: '标签',
                    align: 'center',
                    render: (h, params) => {
                        let rows = [], tags = params.row.belongs_to_many_tag;
                        if(tags.length){
                            $.each(tags, function(key, val){
                                rows.push(h('Tag', {
                                    props: {
                                        color: 'orange'
                                    }
                                }, val.title));
                            });
                        }
                        return h('div', {
                            style: {
                                textAlign: 'left'
                            }
                        }, rows);
                    }
                },
                {
                    title: '状态',
                    align: 'center',
                    render: (h, params) => {
                        switch(params.row.status){
                            case 0:
                                return h('Tag', {
                                    props: {
                                        color: 'primary'
                                    }
                                }, '仅保存');
                                break;
                            case 1:
                                return h('Tag', {
                                    props: {
                                        color: 'success'
                                    }
                                }, '上线');
                                break;
                        }
                    }
                },
                {
                    title: '发布时间',
                    key: 'created_at'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 180,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small',
                                    icon: 'md-eye',
                                    to: '/essay/detail/'+params.row.id,
                                    replace: true,
                                    target: '_blank'
                                },
                                attrs: {
                                    title: '预览'
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small',
                                    icon: 'ios-create-outline',
                                    to: '/admin/article/essays/write/'+params.row.id
                                },
                                attrs: {
                                    title: '编辑'
                                }
                            }),
                            h('Poptip', {
                                props: {
                                    trigger: 'click',
                                    title: '您确认删除这条记录吗？',
                                    placement: 'top-end',
                                    confirm: true,
                                    okText: '确定',
                                    cancelText: '取消',
                                    wordWrap: true
                                },
                                on: {
                                    'on-ok': () => {
                                        this.deleteEssay(params.row.id);
                                    }
                                }
                            }, [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        icon: 'md-trash'
                                    },
                                    attrs: {
                                        title: '删除'
                                    }
                                })
                            ])
                        ]);
                    }
                }
            ],
            options2: {
                shortcuts: [
                    {
                        text: '最近一周',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            return [start, end];
                        }
                    },
                    {
                        text: '最近一个月',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            return [start, end];
                        }
                    },
                    {
                        text: '最近三个月',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            return [start, end];
                        }
                    }
                ]
            }
        }
    },
    computed: {
        essayList () {
            return this.$store.getters.getEssayList;
        },
        pageTotal () {
            return this.$store.getters.getPageTotal;
        },
        categorys () {
            return this.$store.getters.getCategoryList.data;
        }
    },
    methods: {
        /**
         * 提交筛选
         */
        handleSubmit (name) {
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        handleSelectAll (name) {
            this.$refs.selection.selectAll(status);
        },
        /**
         * 重置筛选条件
         */
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        selectedSecond:function(index){

            this.$router.push({path:index})
        },
        /**
         * 日期选择器发生改变时将model绑定的值格式化
         */
        changeFormatDateTime: function(datetime){
            this.formSearchParams.datetime = datetime;
        },
        /**
         * 当页数发生改变时，重新请求数据
         */
        changePage: function(size){
            this.params.page = size;
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        /**
         * 当每页条数发生改变时，重新请求数据
         */
        changePageLimit: function(limit){
            this.params.limit = limit;
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        /**
         * 删除文章
         */
        deleteEssay: function(id){
            let that = this;
            EssayAPI.deleteEssayInfo({id:id})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                        that.$store.dispatch('loadEssayList');
                    }
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                });
        }
    },
    created () {
        this.$store.dispatch('loadEssayList', this.params);
        this.$store.dispatch('loadCategoryList');
    }
}
</script>
