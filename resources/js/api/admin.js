
import axios from '@js/libs/axios.js';

export default {
    getAdminInfo () {
        return axios.get('/getAdminInfo');
    }
}