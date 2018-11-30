<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <div>
        <div class="content-header">
            <div class="header-action">
                <Button v-show="true" type="info" icon="android-add" @click="createRoleGroupInfo">新增</Button>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="table" :columns="columns4" :data="roleList" :border="true"></Table>
        </div>

        <!-- Role info -->
        <Modal v-model="isInfoModal" :title="infoModalTitle" @on-visible-change="listenVisibleChange">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <Form ref="roleGroupForm" :model="roleGroupForm" :rules="ruleValidate" :label-width="100"> 
                <FormItem label="分组名称" prop="title">
                    <Input class="modal-form-item" placeholder="请输入分组名称" v-model="roleGroupForm.title"></Input>
                </FormItem>
                <FormItem label="分组描述" prop="remarks">
                    <Input class="modal-form-item" type="textarea" :rows="4" placeholder="请输入分组描述" v-model="roleGroupForm.remarks"></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="handleInfoCancel">取消</Button>
                <Button type="primary" size="large" :loading="loading" @click="handleInfoSave">保存</Button>
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

        <!-- Allotment of permissions -->
        <allot-permissions v-model="isAuthModal" :role-id="roleId"></allot-permissions>
    </div>
</template>

<script>
import AllotPermissions from './components/allot-permissions';
import RoleAPI from '@js/api/role.js';
export default {
    components: {
        AllotPermissions
    },
    data () {
        return {
            roleId: '',
            loading: false,
            isInfoModal: false,
            infoModalTitle: '新增',
            spinShow: false,
            roleGroupForm: {
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
                                        //this.$store.dispatch('loadRoleAuth', {id:params.row.id});
                                        this.roleId = params.row.id;
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
                                        this.updateRoleGroupInfo(params.row.id);
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
        
        /** 监听Modal显示状态发生改变时 */
        listenVisibleChange: function(visible){
            //Modal隐藏时重置表单
            if (!visible) this.$refs.roleGroupForm.resetFields();
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
        },
        /** Create role group info. */
        createRoleGroupInfo() {
            this.isInfoModal = true;
            this.infoModalTitle = '新增';
        },
        /** Update role group info. */
        updateRoleGroupInfo(id) {
            let that = this;
            that.infoModalTitle = '编辑';
            that.spinShow = true;
            that.isInfoModal = true;
            RoleAPI.getRoleInfo({id:id})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                        that.isInfoModal = false;
                    }else{
                        that.roleGroupForm = response.data.data;
                    }
                    that.spinShow = false;
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.isInfoModal = false;
                });
        },
        /** Admin group modal cancel event. */
        handleInfoCancel() {
            // Reset from
            this.$refs['roleGroupForm'].resetFields();
            this.resetRoleGroupFormFields();
            // Hide modal
            this.isInfoModal= false;
        },
        /** Administrator group form submission event. */
        handleInfoSave() {
            this.$refs.roleGroupForm.validate((valid)=>{
                if (valid) {
                    let that = this;
                    that.loading = true;
                    RoleAPI.postRoleInfo(that.roleGroupForm)
                        .then(function(response){
                            if(response.data.code){
                                that.$Message.error(response.data.msg);
                            }else{
                                that.$Message.success(response.data.msg);
                                that.$store.dispatch('loadRoleList');
                                that.isInfoModal = false;
                                that.loading = false;
                            }
                        })
                        .catch(function(){
                            that.$Message.info('系统繁忙，请稍后再试!');
                        });
                } else {
                    
                }
            });
        },
        /** Reset role group fileds. */
        resetRoleGroupFormFields() {
            this.roleGroupForm = {
                id: '',
                title: '',
                remarks: ''
            };
        }

    },
    created () {
        this.$store.dispatch('loadRoleList');
    }
}
</script>
