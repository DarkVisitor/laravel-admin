
import axios from 'axios';
import config from '@js/config';
import router from '@js/router';

/** Setup request baseURL */
axios.defaults.baseURL = config.APP_CONFIG.API_URL;

/** Setup request timeout */
axios.defaults.timeout = 5000;

/** Http request interceptor (http请求拦截器) */
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `${localStorage.token_type} ${localStorage.access_token}`;
        return config;
    },
    err => {
        return Promise.reject(err);
    });


axios.interceptors.response.use(
    response => {
        return response;
    }, error => {
        console.log(error);
        // 401 清除token信息并跳转到登录页面
        if (error.response.status == 401) {
            alert('登录信息已失效，请重新登录')
            router.replace({    //如果失败，跳转到登录页面
                name: 'login'
            })
        }
        return Promise.reject(error.response.data);
    });

export default axios;

