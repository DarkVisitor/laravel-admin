
import axios from '@js/libs/axios.js';

export default {
    /**
     * 获取管理员信息
     */
    getAdminInfo () {
        return axios.get('/getAdminInfo');
    },

    /**
     * 获取管理员列表
     */
    getAdminList (params) {
        return axios.get('/getAdminList', {params: params});
    },

    /**
     * 保存管理员信息
     * @param {*} data 
     */
    postAdminInfo(data) {
        return axios.post('/saveAdmin', data);
    },

    /**
     * 更新管理员账号状态
     * @param {id: id, status: status} data 
     */
    updateAccountStatus(data) {
        return axios.post('/updateAdminStatus', data);
    },

    /**
     * 删除管理员信息
     * @param {id: id} data 
     */
    deleteAdminInfo(data) {
        return axios.post('/delAdmin', data);
    },

    /**
     * 查找指定的管理员信息
     * @param {id: id} params 
     */
    findAdminFirst(params) {
        return axios.get('/findAdminFirst', {params: params});
    }
}