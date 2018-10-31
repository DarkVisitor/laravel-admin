/**
 * 
 */

import {APP_CONFIG} from '@js/config.js' ;
import {getToken} from '@js/libs/util.js';

export default {
    /**
     * 获取列表数据
     */
    getModuleList () {
        const token = getToken();
        return axios.get(APP_CONFIG.API_URL + '/modules', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },

    /**
     * 获取菜单类型的module数据
     */
    getIsMenuModule () {
        const token = getToken();

        return axios.get(APP_CONFIG.API_URL + '/isMenuModule', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },

    /**
     * 提交表单
     * @param {*表单数据对象} fromData 
     */
    saveFromModule (fromData) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/saveModule',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: fromData
        });
    },

    /**
     * 获取模块信息
     * @param  id 
     */
    getModuleInfo (id) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/editModule',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                id: id
            }
        });
    },

    /**
     * 更新模块状态
     * @param {id:id,status:status} data 
     */
    updateModuleStatus (data) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/updateModuleStatus',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data
        });
    },

    /**
     * 删除模块
     * @param {id:id} data 
     */
    deleteModule (data) {
        const token = getToken();
        
        return axios({
            url: APP_CONFIG.API_URL + '/deleteModule',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data
        });
    }
} 