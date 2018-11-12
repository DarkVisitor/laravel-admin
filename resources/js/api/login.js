/**
 * Imports the APP API URL from the config.
 */
import axios from '@js/libs/axios.js';

export default {
    
    postAccessToken: function (data) {
        return axios.post('/login', data);
    }
}