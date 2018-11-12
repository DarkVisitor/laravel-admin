

import axios from '@js/libs/axios';
import {getToken} from '@js/libs/util.js';

export default {
    /**
     * 初始化应用后台菜单
     * @param {id:id} params 
     */
    initAppAdminMenu (params) {
        const token = getToken();

        return axios({
            url: '/initMenu',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: params
        });
    }
}