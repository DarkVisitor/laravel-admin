<template>
    <div class="laradmin-main">
        <Breadcrumb>
            <BreadcrumbItem>成员信息</BreadcrumbItem>
        </Breadcrumb>
        <div class="content-header" @keydown.enter="handleSubmit">
            <div class="header-action">
                <Button v-has-permit:createAdministrator type="success" icon="md-add" shape="circle" :to="{name: 'createAdministrators'}">新增成员</Button>
            </div>
            <Form ref="formSearchData" :model="formSearchData" inline>
                <FormItem prop="keyword" label='关键字' :label-width="75">
                    <Input type="text" clearable v-model="formSearchData.keyword" placeholder="请输入账户/手机号码/邮箱" class="header-form-search"></Input>
                </FormItem>
                <FormItem prop="datetime" label="注册时间" :label-width="75">
                    <DatePicker @on-change="changeDateTime" v-model="searchDateTime" type="daterange" format="yyyy-MM-dd" :options="options2" placement="bottom-end" placeholder="请选择日期" class="header-form-search"></DatePicker>
                </FormItem>
                <FormItem>
                    <Button type="primary" icon="ios-search" @click="handleSubmit">搜索</Button>
                    <Button type="default" @click="handleReset">重置</Button>
                </FormItem>
            </Form>
        </div>
        <div style="margin-bottom: 20px;">
            <!-- Mumber list. -->
            <Table ref="selection" :columns="tableColumns" :data="adminListData" :loading="loading"></Table>
        </div>
        <div v-show="total">
            <Page :total="total" show-elevator show-total show-sizer @on-change="changePage" @on-page-size-change="changePageSize"></Page>
        </div>
    </div>
</template>
<script>
import AdminAPI from '@js/api/admin.js';
export default {
    name: 'administrators',
    data() {
        return {
            loading: false,
            searchDateTime: '',
            adminListData: [],
            total: 0,
            formSearchData: {
                keyword: '',
                datetime: '',
                page: 1,
                limit: 10
            },
            tableColumns: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '头像',
                    width: 80,
                    align: 'center',
                    render: (h, params) => {
                        return h('Avatar', {
                            props: {
                                shape: 'square',
                                size: 'large',
                                src: params.row.avatar,
                                icon: 'ios-person'
                            }
                        })
                    }
                },
                {
                    title: '账户',
                    key: 'name',
                    minWidth: 120,
                    align: 'center'
                },
                {
                    title: '手机号码',
                    key: 'mobile',
                    minWidth: 120,
                    align: 'center'
                },
                {
                    title: '电子邮箱',
                    key: 'email',
                    minWidth: 180
                },
                {
                    title: '状态',
                    width: 100,
                    align: 'center',
                    render: (h, params) => {
                        return h('i-switch', {
                            props: {
                                value: params.row.status,
                                size: 'large',
                                trueValue: 1,
                                falseValue: 0,
                                loading: params.row.loading,
                                disabled: (!this.hasPermit('updateAdministratorStatus') || params.row.id == 1) ? true : false
                            },
                            on: {
                                'on-change': (value) => {
                                    this.changeAccountStatus(params.index, params.row.id, value);
                                }
                            }
                        }, [
                            h('span', {
                                slot: 'open'
                            }, '激活'),
                            h('span', {
                                slot: 'close'
                            }, '禁用')
                        ])
                    }
                },
                {
                    title: '最近登录时间',
                    key: 'last_login_datetime',
                    minWidth: 150,
                    align: 'center'
                },
                {
                    title: '注册时间',
                    key: 'created_at',
                    minWidth: 150,
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 140,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small',
                                    icon: 'ios-create-outline',
                                    disabled: (!this.hasPermit('editAdministrator') || params.row.id == 1) ? true : false
                                },
                                attrs: {
                                    title: '编辑'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            name: 'editAdministrators',
                                            params: {
                                                id: params.row.id
                                            }
                                        });
                                    }
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
                                        this.deleteAccountInfo(params.row.id);
                                    }
                                }
                            }, [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        icon: 'md-trash',
                                        disabled: (!this.hasPermit('delAdministrator') || params.row.id == 1) ? true : false
                                    },
                                    attrs: {
                                        title: '删除成员'
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
        adminList() {
            this.loading = false;
            return this.$store.getters.getAdminList;
        }
    },
    watch: {
        adminList(curVal, oldVal) {
            this.adminListData = curVal.data;
            this.total = curVal.total;
        }
    },
    methods: {
        /**
         * 查询筛选
         */
        handleSubmit () {
            this.formSearchData.page = 1;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },
        /**
         * 重置筛选条件
         */
        handleReset () {
            this.$refs['formSearchData'].resetFields();
            //重置时清除时间组件数据
            this.searchDateTime = '';
            this.formSearchData.page = 1;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },
        /**
         * 切换时间范围选择
         */
        changeDateTime(datetime) {
            datetime = datetime.filter(Boolean);    // 剔除空元素
            if (datetime.length){
                this.$set(this.formSearchData, 'datetime', datetime.join(','));
            }else{
                this.$set(this.formSearchData, 'datetime', '');
            }            
        },
        /**
         * 切换页码
         */
        changePage(offset) {
            this.formSearchData.page = offset;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },
        /**
         * 切换每页条数
         */
        changePageSize(limit) {
            this.formSearchData.page = 1;
            this.formSearchData.limit = limit;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },
        /**
         * 切换账号状态
         */
        changeAccountStatus(index, id, status) {
            let that = this;
            that.adminListData[index].loading = true;   // 切换加载状态
            AdminAPI.updateAccountStatus({id: id, status: status})
                .then((res) => {
                    if(res.data.code){
                        that.$Message.error(res.data.msg);
                    }else{
                        that.$Message.success(res.data.msg);
                    }
                    that.adminListData[index].loading = false;
                    that.adminListData[index].status = status;
                })
                .catch((err) => {
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.adminListData[index].loading = false;
                });
        },
        /**
         * 删除账号信息
         */
        deleteAccountInfo(id) {
            let that = this;
            that.$Message.loading({
                content: '删除中...',
                duration: 0
            });
            AdminAPI.deleteAdminInfo({id: id})
                .then((res) => {
                    that.$Message.destroy();    // 销毁加载中提示
                    if (res.data.code){
                        that.$Message.error(res.data.msg);
                    }else{
                        that.$Message.success(res.data.msg);
                        that.$store.dispatch('loadAdminList', this.formSearchData);
                    }
                })
                .catch((err) => {
                    that.$Message.destroy();    // 销毁加载中提示
                    that.$Message.info('系统繁忙，请稍后再试!');
                });
        }
    },
    created() {
        if (!Object.keys(this.adminList).length){
            this.loading = true;
        }
    },
    mounted() {
        // Initialize table data.
        this.$store.dispatch('loadAdminList', this.formSearchData);
    }
}
</script>
