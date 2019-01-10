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
    {
        path: '/admin/419',
        name: '419',
        component: (resolve) => require(['@js/views/errors/419.vue'], resolve)
    },
    {
        path: '/admin/500',
        name: '500',
        component: (resolve) => require(['@js/views/errors/500.vue'], resolve)
    }
];