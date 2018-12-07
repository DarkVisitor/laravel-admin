import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import store from '../store';
import iView from 'iview';
import {getToken,transferByRouteArray} from '@js/libs/util.js';
import routers from './routers';
import AdminMain from '@js/views/admin/main';


Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});
const LOGIN_PAGE_NAME = 'login';

console.log('debug0');

//vue-router导航全局前置守卫
router.beforeEach((to, from, next) => {
    //iview 全局加载进度条，开始从 0 显示进度条，并自动加载进度
    iView.LoadingBar.config({
        //全局配置
        color: '#4fe3c1'
    });
    iView.LoadingBar.start();
    const token = getToken();
    console.log('debug1');
    let menus = localStorage.getItem('menuTree');
    console.log(to);

    /* if (to.matched.some(record => record.meta.requiresLogin)){ */
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!token && to.name !== LOGIN_PAGE_NAME) {
            console.log(token);
            next({
                name: LOGIN_PAGE_NAME
            });
        /* }else if (!token && to.name === LOGIN_PAGE_NAME) {
            next(); */
        }else if (token && to.name === LOGIN_PAGE_NAME) {
            // login success redirect to admin
            next({
                name: 'home'
            });
        }else if(token && !menus) {
            console.log('没有权限菜单');
            let menuTrees = '[{"id":7,"parent_id":0,"title":"微应用","vue_router":"article","vue_name":"article","vue_file":"","laravel_router":null,"icon":"ios-paper","is_menu":1,"status":1,"sort":2,"created_at":"2018-09-04 02:34:46","updated_at":"2018-12-06 15:38:56","isChecked":0,"children":[{"id":8,"parent_id":7,"title":"文章管理","vue_router":"essays","vue_name":"essays","vue_file":"essay/essay","laravel_router":null,"icon":"ios-paper-plane","is_menu":1,"status":1,"sort":1,"created_at":"2018-09-04 02:54:35","updated_at":"2018-09-28 17:48:11","isChecked":0,"children":[{"id":10,"parent_id":8,"title":"写文章","vue_router":"write","vue_name":"write","vue_file":"essay/write-essay","laravel_router":null,"icon":null,"is_menu":1,"status":1,"sort":2,"created_at":"2018-09-04 02:59:32","updated_at":"2018-11-19 10:40:56","isChecked":0,"children":[]},{"id":11,"parent_id":8,"title":"文章列表","vue_router":"essay","vue_name":"essay","vue_file":"","laravel_router":null,"icon":null,"is_menu":0,"status":1,"sort":1,"created_at":"2018-09-04 07:02:23","updated_at":"2018-09-04 07:02:23","isChecked":0,"children":[]}]}]},{"id":1,"parent_id":0,"title":"综合设置","vue_router":"system","vue_name":"system","vue_file":"","laravel_router":null,"icon":"ios-construct","is_menu":1,"status":1,"sort":1,"created_at":"2018-09-03 13:45:01","updated_at":"2018-09-28 17:32:41","isChecked":0,"children":[{"id":5,"parent_id":1,"title":"用户管理","vue_router":"users","vue_name":"users","vue_file":"","laravel_router":null,"icon":"ios-people","is_menu":1,"status":1,"sort":2,"created_at":"2018-09-03 14:56:16","updated_at":"2018-09-28 17:54:13","isChecked":0,"children":[{"id":6,"parent_id":5,"title":"成员信息","vue_router":"user","vue_name":"user","vue_file":"user/user","laravel_router":"","icon":"","is_menu":0,"status":1,"sort":1,"created_at":"2018-09-03 14:57:30","updated_at":"2018-09-03 14:57:32","isChecked":0,"children":[]}]},{"id":2,"parent_id":1,"title":"系统设置","vue_router":"basic","vue_name":"basic","vue_file":"","laravel_router":null,"icon":"ios-settings","is_menu":1,"status":1,"sort":1,"created_at":"2018-09-03 13:48:06","updated_at":"2018-09-28 17:46:21","isChecked":0,"children":[{"id":4,"parent_id":2,"title":"角色配置","vue_router":"role","vue_name":"role","vue_file":"role/role","laravel_router":"","icon":"","is_menu":0,"status":1,"sort":2,"created_at":"2018-09-03 13:49:44","updated_at":"2018-09-03 13:49:47","isChecked":0,"children":[]},{"id":3,"parent_id":2,"title":"模块配置","vue_router":"module","vue_name":"module","vue_file":"module/module","laravel_router":"","icon":"","is_menu":0,"status":1,"sort":1,"created_at":"2018-09-03 13:49:10","updated_at":"2018-09-03 13:49:13","isChecked":0,"children":[]}]}]}]';
            
            let adminRoutes = transferByRouteArray(JSON.parse(menuTrees));
            let adminObj = {
                path: '/admin/home',
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
            localStorage.setItem('menuTree', menuTrees);
            next({
                path: to.path
            });
        /* }else if (token && !to.name){
            console.log('全局路由前置守卫钩子：'+to.name);
            next({
                path: to.path
            }); */
        }else {
            next();
        }
    /* }else{
        next();
    } */
});


//vue-router导航全局后置钩子
router.afterEach(to => {
    //iview 全局加载进度条,结束进度条，自动补全剩余进度
    iView.LoadingBar.finish();
    //window.scrollTo(0, 0);
});

export default router;


