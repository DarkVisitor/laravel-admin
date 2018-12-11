import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import store from '../store';
import iView from 'iview';
import {getToken,transferByRouteArray} from '@js/libs/util.js';
import AdminMain from '@js/views/admin/main';
import AdminAPI from '@js/api/admin.js';


Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});
const LOGIN_PAGE_NAME = 'login';

//vue-router导航全局前置守卫
router.beforeEach((to, from, next) => {
    //iview 全局加载进度条，开始从 0 显示进度条，并自动加载进度
    iView.LoadingBar.config({
        //全局配置
        color: '#4fe3c1'
    });
    iView.LoadingBar.start();
    const token = getToken();

    if (!token && to.name !== LOGIN_PAGE_NAME){
        next({
            name: LOGIN_PAGE_NAME
        });
    }else if (token && !store.state.admin.permission.length){
        //获取当前用户信息
        AdminAPI.getAdminInfo()
            .then((response) => {
                store.commit('setAdminInfo', response.data.admins);
                store.commit('setPermission', response.data.menuTree);
                let permission = store.state.admin.permission;
                let adminRoutes = transferByRouteArray(permission);
                adminRoutes.push({
                    path: 'home',
                    name: 'home',
                    meta: {
                        title: 'Home',
                        isMenu: 1
                    },
                    component: (resolve) => require(['@js/views/admin/home/home.vue'], resolve)
                });
                let adminObj = {
                    path: '/admin',
                    name: 'admin',
                    meta: {
                        title: 'admin',
                        isMenu: 0
                    },
                    redirect: { name: 'home' },
                    component: AdminMain,
                };
                if (adminRoutes.length) adminObj.children = adminRoutes;
                //动态添加当前用户权限路由
                router.addRoutes([adminObj, {
                    path: '/admin/429',
                    name: '429',
                    component: (resolve) => require(['@js/views/admin/login/login.vue'], resolve)
                },{
                    path: '*',
                    redirect: '/admin/404'
                }]);
                next({
                    path: to.path
                });
            })
            .catch((error) => {
                store.commit('setAdminInfo', []);
                store.commit('setPermission', []);
            });
    }else if (token && to.name == LOGIN_PAGE_NAME) {    
        next({
            name: 'home'
        });
    }else {
        next();
    }
});


//vue-router导航全局后置钩子
router.afterEach(to => {
    //iview 全局加载进度条,结束进度条，自动补全剩余进度
    iView.LoadingBar.finish();
    //window.scrollTo(0, 0);
});

export default router;


