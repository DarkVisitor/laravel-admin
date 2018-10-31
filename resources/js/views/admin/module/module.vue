<template>
    <div>
        <div class="content-header">
            <div class="header-action">
                <Button type="success" icon="android-add" @click="addModuleToModal('新增')">新增</Button>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="expand" :columns="columns4" :data="modules" :border="true"></Table>
        </div>
        <Modal v-model="isModal" :title="modalTitle" @on-visible-change="listenVisibleChange">
            <Form ref="moduleData" :model="moduleData" :rules="ruleValidate" :label-width="100"> 
                <FormItem label="顶级菜单" prop="parent_id">
                    <Select class="modal-form-item" v-model="moduleData.parent_id">
                        <Option :value="0">顶级菜单</Option>
                        <Option v-for="item in menuModules" :value="item.id" :key="item.id" :style="{paddingLeft: selectPaddingLeft(item.index) + 'px'}">{{ item.title }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="菜单名称" prop="title">
                    <Input class="modal-form-item" placeholder="请输入菜单名称" v-model="moduleData.title"></Input>
                </FormItem>
                <FormItem label="Vue路由">
                    <Input class="modal-form-item" placeholder="请输入Vue路由" v-model="moduleData.vue_router"></Input>
                </FormItem>
                <FormItem label="Laravel路由">
                    <Input class="modal-form-item" placeholder="请输入Laravel路由" v-model="moduleData.laravel_router"></Input>
                </FormItem>
                <FormItem label="导航菜单">
                    <i-switch v-model="moduleData.is_menu" size="large" :true-value="trueValue" :false-value="falseValue">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </FormItem>
                <FormItem label="icon">
                    <Input class="modal-form-item" placeholder="请输入icon" v-model="moduleData.icon"></Input>
                </FormItem>
                <FormItem label="排序">
                    <InputNumber class="modal-form-item" :min="1" v-model="moduleData.sort"></InputNumber>
                </FormItem>
                <FormItem label="状态">
                    <i-switch v-model="moduleData.status" size="large" :true-value="trueValue" :false-value="falseValue">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </i-switch>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="moduleModalCancel">取消</Button>
                <Button type="primary" size="large" @click="moduleModalOk">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import ModuleAPI from '@/api/module.js';
    export default {
        data () {
            return {
                isModal: false,
                modalTitle: '新增',
                trueValue: 1,
                falseValue: 0,
                moduleData: {
                    id: '',
                    parent_id: -1,
                    title: '',
                    vue_router: '',
                    laravel_router: '',
                    is_menu: 1,
                    icon: '',
                    sort: 1,
                    status: 1
                },
                ruleValidate: {
                    parent_id: [
                        {required: true, type: 'number', min: 0, message: '请选择顶级菜单', trigger: 'change'}
                    ],
                    title: [
                        {required: true, message: '请输入菜单名称', trigger: 'blur'}
                    ]
                },
                columns4: [
                    {
                        title: '菜单名称',
                        align: 'left',
                        minWidth: 120,
                        render: (h, params) => {
                            return h("div", {
                                style: {
                                    paddingLeft: (params.row.index*30)+'px'
                                }
                            }, params.row.title)
                        }
                    },
                    {
                        title: 'Vue路由',
                        key: 'vue_router',
                        align: 'left',
                        minWidth: 120
                    },
                    {
                        title: 'Laravel路由',
                        key: 'laravel_router',
                        align: 'left',
                        minWidth: 120
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
                                    falseValue: 0
                                },
                                on: {
                                    'on-change': (value) => {
                                        console.log(value);
                                        //开关状态更改事件
                                        console.log(params);
                                        this.updateModuleStatus(params.row.id, value);
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
                                            
                                            this.editModuleToModal('编辑', params.row.id)
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
            modules () {
                return this.$store.getters.getModuleList.data;
            },
            menuModules () {
                return this.$store.getters.getMenuModule.data;
            },
            moduleInfo () {
                return this.$store.getters.getModuleInfo.data;
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            selectedSecond:function(index){

                this.$router.push({path:index})
            },
            /** 新增模块 at Modal */
            addModuleToModal: function(title) {
                this.isModal = true;
                this.modalTitle = title;
                this.$store.dispatch('loadIsMenuModule');
            },
            /** 编辑模块 at Modal */
            editModuleToModal: function(title, id){
                this.modalTitle = title;
                this.$store.dispatch('loadIsMenuModule');
                let that = this;
                ModuleAPI.getModuleInfo(id)
                    .then(function(response){
                        if (response.data.code){
                            that.$Message.error(response.data.msg);
                        }else{
                            that.moduleData = response.data.data;
                            that.isModal = true;
                        }
                    })
                    .catch(function(){
                        that.$Message.info('系统繁忙，请稍后再试!');
                    });
            },
            /** Modal 确定按钮点击事件 */
            moduleModalOk: function(){
                this.$refs['moduleData'].validate((valid)=>{
                    if (valid) {
                        let that = this;
                        ModuleAPI.saveFromModule(this.moduleData)
                            .then(function(response){
                                console.log(response);
                                if(response.data.code){
                                    that.$Message.error(response.data.msg);
                                }else{
                                    that.$Message.success(response.data.msg);
                                    that.$store.dispatch('loadModule');
                                    that.isModal = false;
                                }
                            })
                            .catch(function(){
                                that.$Message.info('系统繁忙，请稍后再试!');
                            });
                    } else {
                        this.loading = true;
                    }
                });
            },
            /** Modal 取消按钮点击事件 */
            moduleModalCancel: function(){
                //重置表单
                this.$refs['moduleData'].resetFields();
                //隐藏Modal
                this.isModal= false;
            },
            /** 监听Modal显示状态发生改变时 */
            listenVisibleChange: function(visible){
                //Modal隐藏时重置表单
                if (!visible) this.$refs['moduleData'].resetFields();
            },
            /** 顶级菜单列表样式 */
            selectPaddingLeft: function(child){
                return child * 16 + 16;
            },
            /** 删除菜单数据 */
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
            /** Update module status */
            updateModuleStatus: function(id, status){
                let that = this;
                ModuleAPI.updateModuleStatus({id:id,status:status})
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
            }
        },
        created() {
            this.$store.dispatch('loadModule');
        }
    }
</script>
