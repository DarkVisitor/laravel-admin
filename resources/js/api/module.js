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
    getNavMenuModule() {
        return axios.get('/navMenu');
    },

    /**
     * 获取模块信息
     * @param  id 
     */
    getModuleInfo(id) {
        return axios.get('/findModule', {params: {id: id}});
    },

    /**
     * 创建模块
     * @param {*} data 
     */
    createModuleInfo(data) {
        return axios.post('/createModule', data);
    },

    /**
     * 编辑模块
     * @param {*} data 
     */
    editModuleInfo(data) {
        return axios.post('/editModule', data);
    },

    /**
     * 更新模块状态
     * @param {id:id,status:status} data 
     */
    updateModuleStatus(data) {
        return axios.post('/updateModuleStatus', data);
    },

    /**
     * 删除模块
     * @param {id:id} data 
     */
    deleteModule(data) {
        return axios.post('/delModule', data);
    }
} 