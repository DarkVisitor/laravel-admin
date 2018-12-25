<template>
    <div class="laradmin-main">
        <Breadcrumb>
            <BreadcrumbItem>成员信息</BreadcrumbItem>
        </Breadcrumb>
        <div class="content-header">
            <Form ref="formSearchData" :model="formSearchData" inline>
                <FormItem prop="keyword" label='关键字' :label-width="60">
                    <Input type="text" clearable v-model="formSearchData.keyword" placeholder="请输入" class="header-form-search"></Input>
                </FormItem>
                <FormItem prop="typeid" label='文章分类' :label-width="60">
                    <Select v-model="formSearchData.typeid" clearable class="header-form-search">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem prop="datetime" label="注册时间" :label-width="60">
                    <DatePicker @on-change="changeDateTime" v-model="searchDateTime" type="daterange" format="yyyy-MM-dd" :options="options2" placement="bottom-end" placeholder="请选择日期" class="header-form-search"></DatePicker>
                </FormItem>
                <FormItem>
                    <Button type="primary" icon="ios-search" @click="handleSubmit('formSearchData')">搜索</Button>
                    <Button type="default" @click="handleReset('formSearchData')">重置</Button>
                </FormItem>
            </Form>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="selection" :columns="columns4" :data="data1"></Table>
        </div>
        <div>
            <Page :total="100" show-elevator show-total show-sizer></Page>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                searchDateTime: '',
                formSearchData: {
                    keyword: '',
                    typeid: '',
                    datetime: ''
                },
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '头像',
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
                        title: '昵称',
                        key: 'nickname'
                    },
                    {
                        title: 'Email',
                        key: 'email'
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
                                        console.log(value);
                                        //开关状态更改事件
                                        console.log(params);
                                    }
                                }
                            }, [
                                h('span', {
                                    slot: 'open'
                                }, '开启'),
                                h('span', {
                                    slot: 'close'
                                }, '关闭')
                            ])
                        }
                    },
                    {
                        title: '注册时间',
                        key: 'created_at'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small',
                                        icon: 'md-eye'
                                    },
                                    attrs: {
                                        title: '预览'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.row);
                                            this.selectedSecond("/form");
                                        }
                                    }
                                }),
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
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        nickname: 'John Brown',
                        email: '123@163.com',
                        status: 1,
                        created_at: '2016-10-03'
                    },
                    {
                        nickname: 'Jim Green',
                        email: '10001@qq.com',
                        status: 1,
                        created_at: '2016-10-01'
                    },
                    {
                        nickname: 'Joe Black',
                        email: '12345@qq.com',
                        status: 0,
                        created_at: '2016-10-02'
                    },
                    {
                        nickname: 'Jon Snow',
                        email: '12345@163.com',
                        status: 1,
                        created_at: '2016-10-04'
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
        }
    }
</script>
