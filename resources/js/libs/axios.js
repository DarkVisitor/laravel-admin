
import axios from 'axios';
import iView from 'iview';
import {APP_CONFIG} from '@js/config';
import router from '@js/router';
import {getToken} from './util.js';

const token = JSON.parse(getToken());

/** Setup request baseURL */
axios.defaults.baseURL = APP_CONFIG.API_URL;

/** Setup request timeout */
axios.defaults.timeout = 5000;

/** Http request interceptor (http请求拦截器) */
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `${token.token_type} ${token.access_token}`;
        return config;
    },
    err => {
        return Promise.reject(err);
    });


axios.interceptors.response.use(
    response => {
        return response;
    }, error => {
        // 401 清除token信息并跳转到登录页面
        if (error.response.status == 401 && error.response.statusText == 'Unauthorized') {
            iView.Notice.error({
                title: '系统提示',
                desc: '您的登录信息已失效，请重新登录',
                duration: 3
            });
            router.replace({    //如果失败，跳转到登录页面
                name: 'login'
            });
        }
        return Promise.reject(error.response.data);
    });

export default axios;

