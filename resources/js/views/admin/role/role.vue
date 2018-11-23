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

        <!-- Role info -->
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
                <Button type="primary" size="large" @click="modalOk">保存</Button>
            </div>
        </Modal>
        <!-- Role info -->

        <!-- Allotment of members -->
        <Modal v-model="isAdminModal" title="成员分配">
            <Transfer 
                :data="adminList" 
                :targetKeys="allotAdminList" 
                :titles="transferTitle" 
                :list-style="{width: '210px'}" 
                filterable 
                filter-placeholder="请输入管理员名称"
                @on-change="handleAllotAdminChange">
            </Transfer>
            <div slot="footer">
                <Button type="text" size="large" @click="cancelAllotMember">取消</Button>
                <Button type="primary" size="large" @click="saveAllotMember">保存</Button>
            </div>
        </Modal>
        <!-- Allotment of members -->

        <Modal v-model="isAuthModal" title="权限分配" width="80%">
            <div slot="footer">
                <Button type="text" size="large" @click="cancelAllotMember">取消</Button>
                <Button type="primary" size="large" @click="saveAllotMember">保存</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import RoleAPI from '@js/api/role.js';
export default {
    data () {
        return {
            roleId: '',
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
                                        color: 'cyan'
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
                                    icon: 'md-lock',
                                    disabled: params.row.id == '8bce12cbdfaf480fa69172e28eefb891' ? true : false
                                },
                                on: {
                                    click: () => {
                                        //name 路由
                                        //this.$router.push({name: 'roleAuth', params: {id:params.row.id}});
                                        
                                        //path 路由
                                        //this.$router.push({path: `/admin/system/basic/roleAuth/${params.row.id}`});
                                        this.isAuthModal = true;
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
                                    click: () => {
                                        this.handleAllotMembers(params.row.id);
                                    }
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    icon: 'ios-create-outline',
                                    disabled: params.row.id == '8bce12cbdfaf480fa69172e28eefb891' ? true : false
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
                                        icon: 'md-trash',
                                        disabled: params.row.id == '8bce12cbdfaf480fa69172e28eefb891' ? true : false
                                    },
                                    attrs: {
                                        title: '删除分组'
                                    }
                                })
                            ])
                        ]);
                    }
                }
            ],
            isAdminModal: false,
            adminList: [],
            allotAdminList: [],
            transferTitle: ['未分配成员', '已分配成员'],
            isAuthModal: false
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
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                        that.roleList.splice(index, 1);
                    }
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试！');
                });
        },
        handleAllotMembers: function(id){
            let that = this;
            that.roleId = id;
            RoleAPI.findRoleByMember({id:id})    
                .then((response) => {
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                        return false;
                    }
                    that.adminList = response.data.adminList;
                    that.allotAdminList = response.data.roleMembers;
                    that.isAdminModal = true;
                })
                .catch((error) => {
                    that.$Message.info('系统繁忙，请稍后再试！');
                });
        },
        /** 分配管理员 */
        handleAllotAdminChange: function(newTargetKeys){
            this.allotAdminList = newTargetKeys;
        },
        saveAllotMember () {
            let that = this;
            RoleAPI.postAllotMember({id:that.roleId, member:that.allotAdminList})
                .then((response) => {
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                        that.isAdminModal = false;
                        that.$store.dispatch('loadRoleList');
                    }
                })
                .catch((error) => {
                    that.$Message.info('系统繁忙，请稍后再试！');
                });
        },
        cancelAllotMember () {
            this.isAdminModal = false;
        }
    },
    created () {
        this.$store.dispatch('loadRoleList');
    }
}
</script>
