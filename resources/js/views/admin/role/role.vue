<template>
    <div class="laradmin-main">
        <Breadcrumb>
            <BreadcrumbItem>角色配置</BreadcrumbItem>
        </Breadcrumb>
        <div class="content-header">
            <div class="header-action">
                <Button type="success" icon="md-add" shape="circle" :to="{name: 'createRole'}">新增角色分组</Button>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <Table ref="table" :columns="tableColumns" :data="roleList" :border="false" :loading="loading"></Table>
        </div>

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
    </div>
</template>

<script>
import RoleAPI from '@js/api/role.js';
export default {
    
    data () {
        return {
            roleId: '',
            loading: false,
            spinShow: false,
            isMemberModal: false,
            memberList: [],
            allotMemberList: [],
            transferTitle: ['未分配成员', '已分配成员'],
            tableColumns: [
                {
                    type: 'index',
                    title: '编号',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '分组名称',
                    key: 'title',
                    minWidth: 120
                },
                {
                    title: '分组描述',
                    key: 'remarks',
                    minWidth: 120
                },
                {
                    title: '用户列表',
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
                                    disabled: params.row.id == '1' ? true : false
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            name: 'permission',
                                            params: {
                                                id: params.row.id
                                            }
                                        });
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
                                    disabled: params.row.id == '1' ? true : false
                                },
                                attrs: {
                                    title: '编辑分组'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            name: 'createRole',
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
                                        this.deleteRole(params.index, params.row.id);
                                    }
                                }
                            }, [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        icon: 'md-trash',
                                        disabled: params.row.id == '1' ? true : false
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
            this.loading = false;
            return this.$store.getters.getRoleList.data;
        }
    },
    watch: {
        
    },
    methods: {
        /** 
         * Delete user group information.
         */
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
        /** 
         * Allot member to role.
         */
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
        /** 
         * Allocation member.
         */
        handleAllotMemberChange(newTargetKeys) {
            this.allotMemberList = newTargetKeys;
        },
        /** 
         * Cancel member assignment operation.
         */
        handleMemberCancel() {
            this.isMemberModal = false;
        },
        /** 
         * Save member assignment information.
         */
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
        /** 
         * Allocate role group permissions.
         */
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
        }
    },
    created() {
        if (this.roleList == undefined){
            this.loading = true;
        }
    },
    mounted () {
        // Initialize table data.
        this.$store.dispatch('loadRoleList');
    }
    
}
</script>
