/**
 * essay
 */

import {APP_CONFIG} from '@js/config.js';
import {getToken} from '@js/libs/util.js';

export default {
    /**
     * 获取文章列表
     */
     getEssayList (params) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/essays',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: params
        });
     },
     
     /**
      * 保存文章数据
      * @param {*} data 
      */
     postEssayInfo (data) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/essaySave',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data
        });
     },


     /**
      * 获取所有分类
      */
     getAllCategory () {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/allCategory',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
     },


     /**
      * 获取所有标签
      */
     getAllTag () {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/allTag',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
     },

     /**
      * 获取文章信息
      */
     getEssayInfo (params) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/essayEdit',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: params
        });
     },

     /**
      * 删除文章信息
      * @param {id:id} data 
      */
     deleteEssayInfo (data) {
        const token = getToken();

        return axios({
            url: APP_CONFIG.API_URL + '/essayDel',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data
        });
     },

     /**
      * 前台获取文章列表
      * @param {page:page} params 
      */
     getWebEssayList (params) {
        return axios({
            url: APP_CONFIG.API_URL + '/webEssay',
            method: 'get',
            params: params
        });
     },


     /**
      * 前台获取文章详情
      * @param {id:id} params 
      */
     getWerEssayDetail (params) {
        return axios({
            url: APP_CONFIG.API_URL + '/webEssayDetail',
            method: 'get',
            params: params
        });
     }
 }

