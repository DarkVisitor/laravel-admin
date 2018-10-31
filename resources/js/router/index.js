import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import store from '../store';
import iView from 'iview';
import {getToken} from '@js/libs/util.js';


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

    if (to.matched.some(record => record.meta.requiresLogin)){
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!token && to.name !== LOGIN_PAGE_NAME) {
            next({
                name: LOGIN_PAGE_NAME
            });
        }else if (!token && to.name === LOGIN_PAGE_NAME) {
            next();
        }else if (token && to.name === LOGIN_PAGE_NAME) {
            // login success redirect to admin
            next({
                name: 'admin'
            });
        }else {
            next();
        }
    }else{
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


