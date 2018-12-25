<template>
    <div class="laradmin-main">
        <Breadcrumb>
            <BreadcrumbItem>成员信息</BreadcrumbItem>
        </Breadcrumb>
        <div class="content-header">
            <div class="header-action">
                <Button type="success" icon="md-add" shape="circle" :to="{name: 'createAdministrators'}">新增成员</Button>
            </div>
            <Form ref="formSearchData" :model="formSearchData" inline>
                <FormItem prop="keyword" label='关键字' :label-width="75">
                    <Input type="text" clearable v-model="formSearchData.keyword" placeholder="请输入账户/手机号码/邮箱" class="header-form-search"></Input>
                </FormItem>
                <FormItem prop="typeid" label='所属成员组' :label-width="75">
                    <Select v-model="formSearchData.typeid" clearable class="header-form-search">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem prop="datetime" label="注册时间" :label-width="75">
                    <DatePicker @on-change="changeDateTime" v-model="searchDateTime" type="daterange" format="yyyy-MM-dd" :options="options2" placement="bottom-end" placeholder="请选择日期" class="header-form-search"></DatePicker>
                </FormItem>
                <FormItem>
                    <Button type="primary" icon="ios-search" @click="handleSubmit('formSearchData')">搜索</Button>
                    <Button type="default" @click="handleReset('formSearchData')">重置</Button>
                </FormItem>
            </Form>
            
        </div>
        <div style="margin-bottom: 20px;">
            <!-- Mumber list. -->
            <Table ref="selection" :columns="tableColumns" :data="adminList" :loading="loading"></Table>
        </div>
        <div>
            <Page :total="100" show-elevator show-total show-sizer></Page>
        </div>
    </div>
</template>
<script>
export default {
    name: 'administrators',
    data() {
        return {
            loading: false,
            searchDateTime: '',
            formSearchData: {
                keyword: '',
                typeid: '',
                datetime: ''
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
                    title: '所属成员组',
                    key: 'mobile',
                    width: 100
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
                                falseValue: 0
                            },
                            on: {
                                'on-change': (value) => {
                                    
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
                                    icon: 'ios-create-outline'
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
                                        //this.deleteModule(params.row.id);
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
                                        title: '删除成员'
                                    }
                                })
                            ])
                        ]);
                    }
                }
            ],
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: '',
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

    },
    methods: {
        handleSubmit (name) {
            console.log(this.formSearchData);
        },
        handleSelectAll (name) {
            this.$refs.selection.selectAll(status);
        },
        handleReset (name) {
            this.$refs[name].resetFields();
            //重置时清除时间组件数据
            this.searchDateTime = '';
        },
        selectedSecond:function(index){

            this.$router.push({path:index})
        },
        changeDateTime: function(datetime){
            this.$set(this.formSearchData, 'datetime', datetime.join(','));
        }
    },
    created() {
        if (this.adminList == undefined || !this.adminList.length){
            this.loading = true;
        }
    },
    mounted() {
        // Initialize table data.
        this.$store.dispatch('loadAdminList');
    }
}
</script>
