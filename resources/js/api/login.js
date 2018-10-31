/**
 * Imports the APP API URL from the config.
 */
import { APP_CONFIG } from '@js/config';

export default {
    
    postAccessToken: function (data) {
        return axios.post(APP_CONFIG.APP_URL + '/backend/login', data);
    }
}