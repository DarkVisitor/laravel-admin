<template>
    <div class="laradmin-main">
        <Breadcrumb>
            <BreadcrumbItem>模块配置</BreadcrumbItem>
        </Breadcrumb>
        <div class="content-header">
            <div class="header-action">
                <Button type="success" shape="circle" icon="md-add" :to="{ name: 'createModule' }">新增配置</Button>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="expand" :columns="tableColumns" :data="modules" :border="true" :loading="loading"></Table>
        </div>
    </div>
</template>

<script>
import ModuleAPI from '@js/api/module.js';
export default {
    data() {
        return {
            loading: false,
            tableColumns: [
                {
                    title: '菜单名称',
                    align: 'left',
                    minWidth: 180,
                    render: (h, params) => {
                        return h("div", {
                            style: {
                                paddingLeft: (params.row.index*30)+'px'
                            }
                        }, params.row.title)
                    }
                },
                {
                    title: 'Vue路由地址',
                    key: 'vue_router_path',
                    align: 'left',
                    minWidth: 120
                },
                {
                    title: 'Vue路由名称',
                    key: 'vue_router_name',
                    align: 'left',
                    minWidth: 120
                },
                {
                    title: 'Vue文件地址',
                    key: 'vue_file_path',
                    align: 'left',
                    minWidth: 120
                },
                {
                    title: 'Laravel路由地址',
                    key: 'laravel_router_path',
                    align: 'left',
                    minWidth: 140
                },
                {
                    title: '导航菜单',
                    key: 'is_menu',
                    align: 'center',
                    minWidth: 100,
                    render: (h, params) => {
                        return h("Tag", {
                            props: {
                                color: params.row.is_menu ? 'success' : '#999'
                            }
                        }, params.row.is_menu ? '是' : '否')
                    }
                },
                {
                    title: 'icon',
                    key: 'icon',
                    align: 'center',
                    minWidth: 80,
                    render: (h, params) => {
                        return h("Icon", {
                            props: {
                                type: params.row.icon
                            }
                        })
                    }
                },
                {
                    title: '排序',
                    key: 'sort',
                    align: 'center',
                    minWidth: 80
                },
                {
                    title: '状态',
                    align: 'center',
                    width: 100,
                    render: (h, params) => {
                        return h('i-switch', {
                            props: {
                                value: params.row.status,
                                size: 'large',
                                trueValue: 1,
                                falseValue: 0,
                                loading: params.row.loading
                            },
                            on: {
                                'on-change': (value) => {
                                    //开关状态更改事件
                                    this.updateModuleStatus(params.index, params.row.id, value);
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
                    title: '操作',
                    key: 'action',
                    width: 180,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    icon: 'ios-create-outline'
                                },
                                attrs: {
                                    title: '编辑模块'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            name: 'editModule',
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
                                        this.deleteModule(params.row.id);
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
                                        title: '删除模块'
                                    }
                                })
                            ])
                        ]);
                    }
                }
            ]
        }
    },
    computed: {
        modules() {
            this.loading = false;
            return this.$store.getters.getModuleList.data;
        }
    },
    methods: {
        /** 
         * Create module info.
         */
        createModuleInfo() {
            this.isModal = true;
            this.modalTitle = '新增';
            this.$store.dispatch('loadIsMenuModule');
        },
        /** 
         * Delete menu record.
         */
        deleteModule: function(id){
            let that = this;
            ModuleAPI.deleteModule({id:id})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                    }
                    that.$store.dispatch('loadModule');
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                });
        },
        /** 
         * Update module status.
         */
        updateModuleStatus: function(index, id, status){
            let that = this;
            that.modules[index].loading = true;
            ModuleAPI.updateModuleStatus({id:id,status:status})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                    }
                    that.$store.dispatch('loadModule');
                    that.modules[index].loading = false;
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.modules[index].loading = false;
                });
        }
    },
    created() {
        if (this.modules == undefined){
            this.loading = true;
        }
    },
    mounted() {
        // Initialize table data.
        this.$store.dispatch('loadModule');
    }
}
</script>
