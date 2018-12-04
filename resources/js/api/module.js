/**
 * 
 */

import axios from '@js/libs/axios.js';

export default {
    /**
     * 获取列表数据
     */
    getModuleList () {
        return axios.get('/modules');
    },

    /**
     * 获取菜单类型的module数据
     */
    getNavMenuModule () {
        return axios.get('/navMenu');
    },

    /**
     * 提交表单
     * @param {*表单数据对象} fromData 
     */
    saveFromModule (fromData) {
        return axios({
            url: '/saveModule',
            method: 'post',
            data: fromData
        });
    },

    /**
     * 获取模块信息
     * @param  id 
     */
    getModuleInfo (id) {
        return axios({
            url: '/editModule',
            method: 'get',
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
        return axios({
            url: '/updateModuleStatus',
            method: 'post',
            data: data
        });
    },

    /**
     * 删除模块
     * @param {id:id} data 
     */
    deleteModule (data) {
        return axios({
            url: '/delModule',
            method: 'post',
            data: data
        });
    }
} 