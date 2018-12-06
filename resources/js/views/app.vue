<template>
    <div id="app">
        <!-- <div style="height: 200rem;backgrund: #ddd;">

        </div> -->
        <router-view></router-view>
        <BackTop :height="100"></BackTop>
    </div>
</template>
<script>
import router from '@js/router';
import AdminMain from '@js/views/admin/main';
import {removeToken,getMenuTree,removeMenuTree,transferByRouteArray} from '@js/libs/util.js';
export default {
    name: 'App',
    data() {
        return {

        }
    },
    methods: {
            
    },
    created() {
        let menus = localStorage.getItem('menuTree');
        let adminRoutes = transferByRouteArray(JSON.parse(menus));
        let adminObj = {
            path: '/admin',
            name: 'admin',
            meta: {
                title: 'Home',
                requiresLogin: true
            },
            component: AdminMain,
        };
        if (adminRoutes.length) adminObj.children = adminRoutes;
        router.addRoutes([adminObj, {
            path: '/admin/429',
            name: '429',
            component: (resolve) => require(['@js/views/admin/login/login.vue'], resolve)
        },{
            path: '*',
            redirect: '/admin/404'
        }]);
    }
}
</script>

