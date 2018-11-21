
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
    getAdminList () {
        return axios.get('/getAdminList');
    }
}