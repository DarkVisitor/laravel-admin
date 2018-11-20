<template>
    <div>
        <div class="content-header">
            <div class="header-action">
                <Button v-show="true" type="info" icon="android-add" @click="addRoleToModal('新增')">新增</Button>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="table" :columns="columns4" :data="roleList" :border="true"></Table>
        </div>
        <Modal v-model="isModal" :title="modalTitle" @on-visible-change="listenVisibleChange">
            <Form ref="roleData" :model="roleData" :rules="ruleValidate" :label-width="100"> 
                <FormItem label="分组名称" prop="title">
                    <Input class="modal-form-item" placeholder="请输入分组名称" v-model="roleData.title"></Input>
                </FormItem>
                <FormItem label="分组描述">
                    <Input class="modal-form-item" type="textarea" :rows="4" placeholder="请输入分组描述" v-model="roleData.remarks"></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="modalCancel">取消</Button>
                <Button type="primary" size="large" @click="modalOk">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import RoleAPI from '@js/api/role.js';
export default {
    data () {
        return {
            isModal: false,
            modalTitle: '新增',
            roleData: {
                id: '',
                title: '',
                remarks: ''
            },
            ruleValidate: {
                title: [
                    {required: true, message: '请输入分组名称', trigger: 'blur'}
                ]
            },
            columns4: [
                {
                    type: 'index',
                    title: '编号',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '分组名称',
                    key: 'title',
                    align: 'center',
                    minWidth: 120
                },
                {
                    title: '分组描述',
                    key: 'remarks',
                    align: 'center',
                    minWidth: 120
                },
                {
                    title: '用户列表',
                    align: 'center',
                    minWidth: 320,
                    render: (h, params) => {
                        let rows = [];
                        let admins = params.row.belongs_to_many_admin;
                        if(admins.length){
                            $.each(admins, function(key, val){
                                rows.push(h('Tag', {
                                    props: {
                                        color: 'orange'
                                    }   
                                }, val.name));
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
                    title: '操作',
                    key: 'action',
                    width: 200,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small',
                                    icon: 'md-lock'
                                },
                                on: {
                                    click: () => {
                                        //name 路由
                                        //this.$router.push({name: 'roleAuth', params: {id:params.row.id}});
                                        
                                        //path 路由
                                        this.$router.push({path: `/admin/system/basic/roleAuth/${params.row.id}`});
                                    }
                                },
                                attrs: {
                                    title: '权限分配'
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small',
                                    icon: 'md-person-add'
                                },
                                attrs: {
                                    title: '成员分配'
                                },
                                on: {
                                    
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    icon: 'ios-create-outline'
                                },
                                attrs: {
                                    title: '编辑分组'
                                },
                                on: {
                                    click: () => {
                                        this.editRoleToModal('编辑', params.row.id);
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
                                        this.deleteRole(params.index, params.row.id);
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
                                        title: '删除分组'
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
        roleList () {
            return this.$store.getters.getRoleList.data;
        },
        roleInfo () {
            return this.$store.getters.getRoleInfo.data;
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
        addRoleToModal: function(title) {
            this.isModal = true;
            this.modalTitle = title;
        },
        /** 编辑模块 at Modal */
        editRoleToModal: function(title, id){
            let that = this;
            this.modalTitle = title;
            RoleAPI.getRoleInfo({id:id})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.roleData = response.data.data;
                        that.isModal = true;
                    }
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                });              
        },
        /** Modal 确定按钮点击事件 */
        modalOk: function(){
            this.$refs.roleData.validate((valid)=>{
                if (valid) {
                    let that = this;
                    RoleAPI.postRoleInfo(that.roleData)
                        .then(function(response){
                            if(response.data.code){
                                that.$Message.error(response.data.msg);
                            }else{
                                that.$Message.success(response.data.msg);
                                that.$store.dispatch('loadRoleList');
                                that.isModal = false;
                            }
                        })
                        .catch(function(){
                            that.$Message.info('系统繁忙，请稍后再试!');
                        });
                } else {
                    
                }
            });
        },
        /** Modal 取消按钮点击事件 */
        modalCancel: function(){
            //重置表单
            this.$refs.roleData.resetFields();
            //隐藏Modal
            this.isModal= false;
        },
        /** 监听Modal显示状态发生改变时 */
        listenVisibleChange: function(visible){
            //Modal隐藏时重置表单
            if (!visible) this.$refs.roleData.resetFields();
        },
        /** 删除角色数据 */
        deleteRole: function(index, id){
            let that = this;
            RoleAPI.delRoleInfo({id:id})
                .then(function(response){
                    that.$Message.error(response.data.msg);
                    if(!response.data.code){
                        that.roleList.splice(index, 1);
                    }
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试！');
                });
        }
    },
    created () {
        this.$store.dispatch('loadRoleList');
    }
}
</script>
