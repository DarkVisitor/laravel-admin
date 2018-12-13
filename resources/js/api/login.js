/**
 * Imports the APP API URL from the config.
 */
import axios from '@js/libs/axios.js';

export default {
    /**
     * Post user info.
     * 
     * @param {*} data 
     */
    postAccessToken: function (data) {
        return axios.post('/login', data);
    },

    /**
     * Get verify code.
     * 
     * @param {t: t} params 
     */
    getVerifyCode(params) {
        return axios.get('/getVerifyCode', { params: params });
    }
}