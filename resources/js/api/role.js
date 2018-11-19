/**
 * System role configuration API file.
 */

import {getToken} from '@js/libs/util.js';

export default {
    /**
     *获取角色组数据
     */
    getRoleList () {
        
        return axios.get('/roles');
    },

    /**
     * 提交数据
     * @param {id:id,title:title,remarks:remarks} data 
     */
    postRoleInfo (data) {
        return axios.post('/saveRole', data);
    },


    /**
     * 获取用户组数据
     * @param {id:id} params 
     */
    getRoleInfo (params) {
        return axios.get('/editRole', {params: params});
    },


    /**
     * 删除用户组信息
     * @param {id:id} data 
     */
    delRoleInfo (data) {
        return axios.post('/delRole', data);
    },

    /**
     * 获取用户组权限
     * @param {id:id} params 
     */
    getRoleAuth (params) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/roleAuth',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: params
        });
    },


    /**
     * 保存用户组权限数据
     * @param {id:id,authority:authority} data 
     */
    postRoleAuth (data) {
        const token = getToken();
        
        return axios({
            url: APP_CONFIG.API_URL + '/saveRoleAuth',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data
        });
    }
}