<template>
    <Modal v-model="isModal" title="权限分配" width="80%">
        <auth-tree :data="roleAuth"></auth-tree>
        <div slot="footer">
            <Button type="text" size="large" >取消</Button>
            <Button type="primary" size="large" >保存</Button>
        </div>
    </Modal>
</template>
<script>
import AuthTree from '../auth-tree';
import RoleAPI from '@js/api/role.js';
export default {
    name: 'allot-permissions',
    components: {
        AuthTree
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        roleId: String
    },
    data() {
        return {
            isModal: false,
            /* roleAuth: [
                        {
                            "id": 7, 
                            "parent_id": 0, 
                            "title": "内容管理", 
                            "vue_router": null, 
                            "vue_name": "article", 
                            "laravel_router": null, 
                            "icon": "ios-paper", 
                            "is_menu": 1, 
                            "status": 1, 
                            "sort": 2, 
                            "created_at": "2018-09-04 02:34:46", 
                            "updated_at": "2018-09-28 17:32:21", 
                            "isChecked": 1, 
                            "children": [
                            {
                                "id": 8, 
                                "parent_id": 7, 
                                "title": "文章管理", 
                                "vue_router": null, 
                                "vue_name": "essays", 
                                "laravel_router": null, 
                                "icon": "ios-paper-plane", 
                                "is_menu": 1, 
                                "status": 1, 
                                "sort": 1, 
                                "created_at": "2018-09-04 02:54:35", 
                                "updated_at": "2018-09-28 17:48:11", 
                                "isChecked": 1, 
                                "children": [
                                {
                                    "id": 10, 
                                    "parent_id": 8, 
                                    "title": "写文章", 
                                    "vue_router": "/admin/article/essays/write", 
                                    "vue_name": "write", 
                                    "laravel_router": null, 
                                    "icon": null, 
                                    "is_menu": 1, 
                                    "status": 1, 
                                    "sort": 2, 
                                    "created_at": "2018-09-04 02:59:32", 
                                    "updated_at": "2018-11-19 10:40:56", 
                                    "isChecked": 1, 
                                    "children": [ ]
                                }, 
                                {
                                    "id": 11, 
                                    "parent_id": 8, 
                                    "title": "文章列表", 
                                    "vue_router": "/admin/article/essays/essay", 
                                    "vue_name": "essay", 
                                    "laravel_router": null, 
                                    "icon": null, 
                                    "is_menu": 0, 
                                    "status": 1, 
                                    "sort": 1, 
                                    "created_at": "2018-09-04 07:02:23", 
                                    "updated_at": "2018-09-04 07:02:23", 
                                    "isChecked": 1, 
                                    "children": [ ]
                                }
                                ]
                            }
                            ]
                        }, 
                        {
                            "id": 1, 
                            "parent_id": 0, 
                            "title": "综合设置", 
                            "vue_router": null, 
                            "vue_name": "system", 
                            "laravel_router": null, 
                            "icon": "ios-construct", 
                            "is_menu": 1, 
                            "status": 1, 
                            "sort": 1, 
                            "created_at": "2018-09-03 13:45:01", 
                            "updated_at": "2018-09-28 17:32:41", 
                            "isChecked": 1, 
                            "children": [
                            {
                                "id": 5, 
                                "parent_id": 1, 
                                "title": "用户管理", 
                                "vue_router": null, 
                                "vue_name": "users", 
                                "laravel_router": null, 
                                "icon": "ios-people", 
                                "is_menu": 1, 
                                "status": 1, 
                                "sort": 2, 
                                "created_at": "2018-09-03 14:56:16", 
                                "updated_at": "2018-09-28 17:54:13", 
                                "isChecked": 1, 
                                "children": [
                                {
                                    "id": 6, 
                                    "parent_id": 5, 
                                    "title": "成员信息", 
                                    "vue_router": "/admin/system/users/user", 
                                    "vue_name": "user", 
                                    "laravel_router": "", 
                                    "icon": "", 
                                    "is_menu": 0, 
                                    "status": 1, 
                                    "sort": 1, 
                                    "created_at": "2018-09-03 14:57:30", 
                                    "updated_at": "2018-09-03 14:57:32", 
                                    "isChecked": 1, 
                                    "children": [ ]
                                }
                                ]
                            }, 
                            {
                                "id": 2, 
                                "parent_id": 1, 
                                "title": "系统设置", 
                                "vue_router": null, 
                                "vue_name": "basic", 
                                "laravel_router": null, 
                                "icon": "ios-settings", 
                                "is_menu": 1, 
                                "status": 1, 
                                "sort": 1, 
                                "created_at": "2018-09-03 13:48:06", 
                                "updated_at": "2018-09-28 17:46:21", 
                                "isChecked": 1, 
                                "children": [
                                {
                                    "id": 13, 
                                    "parent_id": 2, 
                                    "title": "管理员", 
                                    "vue_router": null, 
                                    "vue_name": null, 
                                    "laravel_router": null, 
                                    "icon": null, 
                                    "is_menu": 1, 
                                    "status": 1, 
                                    "sort": 4, 
                                    "created_at": "2018-11-21 17:01:34", 
                                    "updated_at": "2018-11-21 17:01:34", 
                                    "isChecked": 0, 
                                    "children": [
                                    {
                                        "id": 14, 
                                        "parent_id": 13, 
                                        "title": "删除管理员", 
                                        "vue_router": null, 
                                        "vue_name": null, 
                                        "laravel_router": null, 
                                        "icon": null, 
                                        "is_menu": 0, 
                                        "status": 1, 
                                        "sort": 1, 
                                        "created_at": "2018-11-21 18:17:13", 
                                        "updated_at": "2018-11-21 18:18:06", 
                                        "isChecked": 0, 
                                        "children": [ ]
                                    }
                                    ]
                                }, 
                                {
                                    "id": 12, 
                                    "parent_id": 2, 
                                    "title": "短信配置", 
                                    "vue_router": null, 
                                    "vue_name": null, 
                                    "laravel_router": null, 
                                    "icon": null, 
                                    "is_menu": 1, 
                                    "status": 1, 
                                    "sort": 3, 
                                    "created_at": "2018-11-19 14:17:12", 
                                    "updated_at": "2018-11-21 17:01:15", 
                                    "isChecked": 0, 
                                    "children": [ ]
                                }, 
                                {
                                    "id": 4, 
                                    "parent_id": 2, 
                                    "title": "角色配置", 
                                    "vue_router": "/admin/system/basic/role", 
                                    "vue_name": "role", 
                                    "laravel_router": "", 
                                    "icon": "", 
                                    "is_menu": 0, 
                                    "status": 1, 
                                    "sort": 2, 
                                    "created_at": "2018-09-03 13:49:44", 
                                    "updated_at": "2018-09-03 13:49:47", 
                                    "isChecked": 1, 
                                    "children": [ ]
                                }, 
                                {
                                    "id": 3, 
                                    "parent_id": 2, 
                                    "title": "模块配置", 
                                    "vue_router": "/admin/system/basic/module", 
                                    "vue_name": "module", 
                                    "laravel_router": "", 
                                    "icon": "", 
                                    "is_menu": 0, 
                                    "status": 1, 
                                    "sort": 1, 
                                    "created_at": "2018-09-03 13:49:10", 
                                    "updated_at": "2018-09-03 13:49:13", 
                                    "isChecked": 1, 
                                    "children": [ ]
                                }
                                ]
                            }
                            ]
                        }
                    ] */
            roleAuth: []        
        }
    },
    computed: {
        /* roleAuth () {
            return this.$store.getters.getRoleAuth;
        }, */
        roleInfo () {
            return this.$store.state.role.roleInfo;
        }
    },
    watch: {
        value(newVal, oldVal) {
            this.isModal = newVal
        },
        isModal(newVal, oldVal) {
            this.$emit('input', newVal);
        },
        roleId(newVal) {
            let that = this;
            RoleAPI.getRoleAuth({id:newVal})
                .then(function(response){
                    console.log(response);
                    that.roleAuth = response.data.AuthTree;
                })
                .catch(function(){
                    
                });
        }
    },
    methods: {
        handleChangeModal (event) {
            console.log(event);
        }
    },
    created() {
        //this.$store.dispatch('loadRoleAuth', {id:'8bce12cbdfaf480fa69172e28eefb891'});
    }
}
</script>

