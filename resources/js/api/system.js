

import axios from '@js/libs/axios';

export default {
    /**
     * 初始化应用后台菜单
     * @param {id:id} params 
     */
    initAppAdminMenu(params) {
        return axios.get('/initMenu', {
            params: params
        });
    },

    /**
     * Send SMS or Email verify code.
     * 
     * @param {account: account, verify_code: verify_code} data 
     */
    sendVerifyCode(data) {
        return axios.post('/sendVerifyCode', data);
    }
}