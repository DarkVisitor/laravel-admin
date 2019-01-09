/**
 * System role configuration API file.
 */

import {getToken} from '@js/libs/util.js';

export default {
    /**
     *获取角色组数据
     */
    getRoleList() {
        return axios.get('/roles');
    },

    /**
     * 获取用户组数据
     * @param {id:id} params 
     */
    getRoleInfo(params) {
        return axios.get('/findRole', {params: params});
    },

    /**
     * 获取用户组权限
     * @param {id:id} params 
     */
    getRoleAuth(params) {
        return axios.get('/roleAuth', {params: params});
    },

    /**
     * Find members associated with roles.
     * 
     * @param {id:id} params 
     */
    findRoleByMember(params) {
        return axios.get('/roleMember', {params:params});
    },

    /**
     * 创建用户组信息
     * @param {id:id,title:title,remarks:remarks} data 
     */
    createRoleInfo(data) {
        return axios.post('/createRole', data);
    },


    /**
     * 编辑用户组信息
     * @param {*} data 
     */
    eidtRoleInfo(data) {
        return axios.post('/editRole', data);
    },


    /**
     * 删除用户组信息
     * @param {id:id} data 
     */
    delRoleInfo(data) {
        return axios.post('/delRole', data);
    },


    /**
     * 保存用户组权限数据
     * @param {id:id,authority:authority} data 
     */
    postRoleAuth(data) {
        return axios.post('/allotAuth', data);
    },

    /**
     * Assign members to user groups.
     * 
     * @param {id:id, member:member} data 
     */
    postAllotMember(data) {
        return axios.post('/allotMember', data);
    }
}