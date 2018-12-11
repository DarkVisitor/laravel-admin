import Vue from 'vue';
import AdminMain from '@js/views/admin/main';
import ParentView from '@js/components/parent-view';
//import Web from '@js/views/web/web';


export default [
    {
        path: '/admin/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: (resolve) => require(['@js/views/admin/login/login.vue'], resolve)
    },
    {
        path: '/admin/404',
        name: '404',
        component: (resolve) => require(['@js/views/errors/404.vue'], resolve)
    },
    /* {
        path: '*',
        redirect: '/admin/404'
    }, */

    
    /* {
        path: '/admin',
        name: 'admin',
        meta: {
            title: 'admin',
            requiresLogin: true
        },
        component: AdminMain,
        children: [
            {
                path: 'article',
                name: 'article',
                meta: {
                    title: '内容管理',
                    hideInMenu: false,
                    requiresLogin: true
                },
                component: ParentView,
                children: [
                    {
                        path: 'essays',
                        name: 'essays',
                        meta: {
                            title: '文章管理',
                            hideInMenu: false,
                            requiresLogin: true
                        },
                        component: ParentView,
                        children: [
                            {
                                path: 'essay',
                                name: 'essay',
                                component: ParentView,
                                children: [
                                    {
                                        path: '',
                                        meta: {
                                            title: '文章列表',
                                            hideInMenu: false,
                                            requiresLogin: true
                                        },
                                        component: (resolve) => require(['@js/views/admin/essay/essay.vue'], resolve)
                                    },
                                    {
                                        path: 'write/:id?',
                                        name: 'write',
                                        meta: {
                                            title: '写文章',
                                            hideInMenu: false,
                                            requiresLogin: true
                                        },
                                        component: (resolve) => require(['@js/views/admin/essay/write-essay.vue'], resolve)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'system',
                name: 'system',
                meta: {
                    title: '综合设置',
                    hideInMenu: false,
                    requiresLogin: true
                },
                component: ParentView,
                children: [
                    {
                        path: 'users',
                        name: 'users',
                        meta: {
                            title: '用户管理',
                            hideInMenu: false,
                            requiresLogin: true
                        },
                        component: ParentView,
                        children: [
                            {
                                path: 'user',
                                name: 'user',
                                meta: {
                                    title: '成员信息',
                                    hideInMenu: false,
                                    requiresLogin: true
                                },
                                component: ParentView,
                                children: [
                                    {
                                        path: '',
                                        name: 'user',
                                        meta: {
                                            title: '成员信息',
                                            hideInMenu: false,
                                            requiresLogin: true
                                        },
                                        component: (resolve) => require(['@js/views/admin/user/user.vue'], resolve)
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'basic',
                        name: 'basic',
                        meta: {
                            title: '系统设置',
                            hideInMenu: false,
                            requiresLogin: true
                        },
                        component: ParentView,
                        children: [
                            {
                                path: 'role',
                                name: 'role',
                                meta: {
                                    title: '角色配置',
                                    hideInMenu: false,
                                    requiresLogin: true
                                },
                                component: Vue.component('RoleConfig', require('@js/views/admin/role/role.vue'))
                            },
                            {
                                path: 'module',
                                name: 'module',
                                meta: {
                                    title: '模块配置',
                                    hideInMenu: false,
                                    requiresLogin: true
                                },
                                component: Vue.component('ModuleConfig', require('@js/views/admin/module/module.vue'))
                            }
                        ]
                    }
                ]
            }
        ]
    } */
    
];