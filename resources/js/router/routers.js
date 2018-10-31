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
        component: Vue.component('Login', require('@js/views/admin/login/login.vue'))
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            title: 'Home',
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
                    /* {
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
                                path: 'write/:id?',
                                name: 'write',
                                meta: {
                                    title: '写文章',
                                    hideInMenu: false,
                                    requiresLogin: true
                                },
                                component: Vue.component('WriteEssay', require('@js/views/admin/essay/write-essay.vue'))
                            },
                            {
                                path: 'essay',
                                name: 'essay',
                                meta: {
                                    title: '文章列表',
                                    hideInMenu: false,
                                    requiresLogin: true
                                },
                                component: Vue.component('Essay', require('@js/views/admin/essay/essay.vue'))
                            }
                        ]
                    } */
                ]
            },
            {
                path: 'system',
                name: 'system',
                meta: {
                    title: '系统设置',
                    hideInMenu: false,
                    requiresLogin: true
                },
                component: ParentView,
                children: [
                    /* {
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
                                component: Vue.component('User', require('@js/views/admin/user/user.vue'))
                            }
                        ]
                    },
                    {
                        path: 'basic',
                        name: 'basic',
                        meta: {
                            title: '基础设置',
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
                                path: 'roleAuth/:id',
                                name: 'roleAuth',
                                meta: {
                                    title: '权限分配',
                                    hideInMenu: false,
                                    requiresLogin: true
                                },
                                component: Vue.component('RoleAuth', require('@js/views/admin/role/role-auth.vue'))
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
                    } */
                ]
            }
        ]
    },
    /* {
        path: '/',
        name: '/',
        component: Web,
        children: [
            {
                path: '/',
                name: '/',
                component: Vue.component('Home', require('@js/views/web/home/home.vue'))
            },
            {
                path: '/essay',
                name: 'essay',
                component: ParentView,
                children: [
                    {
                        path: 'php',
                        name: 'php',
                        component: Vue.component('PhpEssay', require('@js/views/web/essay/php.vue'))
                    },
                    {
                        path: 'laravel',
                        name: 'laravel',
                        component: Vue.component('LaravelEssay', require('@js/views/web/essay/php.vue'))
                    },
                    {
                        path: 'mysql',
                        name: 'mysql',
                        component: Vue.component('MysqlEssay', require('@js/views/web/essay/php.vue'))
                    },
                    {
                        path: 'linux',
                        name: 'linux',
                        component: Vue.component('PhpEssay', require('@js/views/web/essay/php.vue'))
                    },
                    {
                        path: 'python',
                        name: 'python',
                        component: Vue.component('PythonEssay', require('@js/views/web/essay/php.vue'))
                    },
                    {
                        path: 'vuejs',
                        name: 'vuejs',
                        component: Vue.component('VueJsEssay', require('@js/views/web/essay/php.vue'))
                    }
                ]
            },
            {
                path: '/essay/detail/:id',
                name: 'essay-detail',
                component: Vue.component('EssayDetail', require('@js/views/web/essay/essay-detail.vue'))
            },
            {
                path: '/about',
                name: 'about',
                component: Vue.component('About', require('@js/views/web/about/about.vue'))
            }
        ]
    } */
];