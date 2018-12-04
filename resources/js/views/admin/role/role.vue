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
        <Modal v-model="isInfoModal" :title="infoModalTitle" @on-visible-change="listenInfoModalChange">
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
        <Modal v-model="isMemberModal" title="成员分配">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <Transfer 
                :data="memberList" 
                :targetKeys="allotMemberList" 
                :titles="transferTitle" 
                :list-style="{width: '210px'}" 
                filterable 
                filter-placeholder="请输入成员名称"
                @on-change="handleAllotMemberChange">
            </Transfer>
            <div slot="footer">
                <Button type="text" size="large" @click="handleMemberCancel">取消</Button>
                <Button type="primary" size="large" :loading="loading" @click="handleMemberSave">保存</Button>
            </div>
        </Modal>
        <!-- Allotment of members -->

        <!-- Allotment of permissions -->
        <Modal v-model="isAuthModal" title="权限分配" width="80%">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <auth-tree v-model="roleGroupAuthList"></auth-tree>
            <div slot="footer">
                <Button type="text" size="large" @click="handleAuthCancel">取消</Button>
                <Button type="primary" size="large" :loading="loading" @click="handleAuthSave">保存</Button>
            </div>
        </Modal>

    </div>
</template>

<script>
import AuthTree from './components/auth-tree';
import RoleAPI from '@js/api/role.js';
export default {
    components: {
        AuthTree
    },
    data () {
        return {
            roleId: '',
            loading: false,
            spinShow: false,
            isInfoModal: false,
            infoModalTitle: '新增',
            isMemberModal: false,
            memberList: [],
            allotMemberList: [],
            transferTitle: ['未分配成员', '已分配成员'],
            isAuthModal: false,
            roleGroupAuthList: [],
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
                                        this.handleRoleGroupAuth(params.row.id);
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
    watch: {
        
    },
    methods: {
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
                        that.isInfoModal = false;
                        that.$Message.error(response.data.msg);
                    }else{
                        that.roleGroupForm = response.data.data;
                    }
                    that.spinShow = false;
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.isInfoModal = false;
                    that.spinShow = false;
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
                            }
                            that.loading = false;
                        })
                        .catch(function(){
                            that.$Message.info('系统繁忙，请稍后再试!');
                            that.loading = false;
                        });
                }
            });
        },
        /** Listen for User Group Information Modal Box to Send Change Events. */
        listenInfoModalChange(visible) {
            if (!visible) {
                this.$refs.roleGroupForm.resetFields();
                this.resetRoleGroupFormFields();
            }
        },
        /** Reset role group fileds. */
        resetRoleGroupFormFields() {
            this.roleGroupForm = {
                id: '',
                title: '',
                remarks: ''
            };
        },
        /** Delete user group information. */
        deleteRole(index, id) {
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
        /** Allot member to role. */
        handleAllotMembers(id) {
            let that = this;
            that.roleId = id;
            that.isMemberModal = true;
            that.spinShow = true;
            RoleAPI.findRoleByMember({id:id})    
                .then((response) => {
                    if(response.data.code){
                        that.isMemberModal = false;
                        that.$Message.error(response.data.msg);
                    }else{
                        that.memberList = response.data.adminList;
                        that.allotMemberList = response.data.roleMembers;
                    }
                    that.spinShow = false;
                })
                .catch((error) => {
                    that.$Message.info('系统繁忙，请稍后再试！');
                    that.isMemberModal = false;
                    that.spinShow = false;
                });
        },
        /** Allocation member. */
        handleAllotMemberChange(newTargetKeys) {
            this.allotMemberList = newTargetKeys;
        },
        /** Cancel member assignment operation. */
        handleMemberCancel() {
            this.isMemberModal = false;
        },
        /** Save member assignment information. */
        handleMemberSave() {
            let that = this;
            that.loading = true;
            RoleAPI.postAllotMember({id:that.roleId, member:that.allotMemberList})
                .then((response) => {
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                        that.isMemberModal = false;
                        that.$store.dispatch('loadRoleList');
                    }
                    that.loading = false;
                })
                .catch((error) => {
                    that.$Message.info('系统繁忙，请稍后再试！');
                    that.loading = false;
                });
        },
        /** Allocate role group permissions. */
        handleRoleGroupAuth(id) {
            let that = this;
            that.isAuthModal = true;
            that.spinShow = true;
            RoleAPI.getRoleAuth({id:id})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                        that.isAuthModal = false;
                    }else{
                        that.roleGroupAuthList = response.data.authTree;
                    }
                    that.spinShow = false;
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.isAuthModal = false;
                    that.spinShow = false;
                });
        },
        /** Cancel assigning role group permissions. */
        handleAuthCancel() {
            this.isAuthModal = false;
        },
        /** Save role group permission information. */
        handleAuthSave() {
            let that = this;
            that.loading = true;
            RoleAPI.postRoleAuth({id: this.roleId, authority: this.roleGroupAuthList})
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                        that.isAuthModal = false;
                    }
                    that.loading = false;
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.loading = false;
                });
        }
    },
    created () {
        this.$store.dispatch('loadRoleList');
    }
}
</script>
