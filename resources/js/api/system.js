

import {APP_CONFIG} from '@js/config.js';
import {getToken} from '@js/libs/util.js';

export default {
    /**
     * 初始化应用后台菜单
     * @param {id:id} params 
     */
    initAppAdminMenu (params) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/initMenu',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: params
        });
    }
}