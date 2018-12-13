/*
 |-------------------------------------------------------------------------------
 | VUEX modules/system.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the system.
 */

import SystemAPI from '@js/api/system.js';
import LoginAPI from '@js/api/login.js';
import {setMenuTree} from '@js/libs/util.js';

export const system = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        menuTree: [],
        verifyCode: ''
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getMenuTree(state) {
            return state.menuTree;
        },
        getVerifyCode(state) {
            return state.verifyCode;
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setMenuTree (state, menuTree){
            state.menuTree = menuTree;
        },
        setVerifyCode(state, verifyCode) {
            state.verifyCode = verifyCode;
        }
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        initMenuTree ({commit}, params){
            SystemAPI.initAppAdminMenu(params)
                .then(res => {
                    console.log(res);
                    if(!res.data.code){
                        setMenuTree(res.data.data);
                        commit('setMenuTree', res.data.data);
                    }else{
                        commit('setMenuTree', []);
                    }
                })
                .catch(err => {
                    commit('setMenuTree', []);
                })            
        },
        loadVerifyCode({commit}, params) {
            LoginAPI.getVerifyCode(params)
                .then(res => {
                    if (res.data.code){
                        commit('setVerifyCode', '');
                    }else{
                        commit('setVerifyCode', res.data.verify_code);
                    }
                })
                .catch(err => {
                    commit('setVerifyCode', '');
                })
        }
    }
    
 }