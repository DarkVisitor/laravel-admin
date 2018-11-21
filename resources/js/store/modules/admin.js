/*
 |-------------------------------------------------------------------------------
 | VUEX modules/admin.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the admin.
 */

import AdminAPI from '@js/api/admin.js' ;
import {setMenuTree} from '@js/libs/util.js';

export const admin = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        adminInfo: [],
        adminList: []
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getAdminInfo (state) {
            return state.adminInfo;
        },
        getAdminList (state) {
            return state.adminList;
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setAdminInfo (state, adminInfo) {
            state.adminInfo = adminInfo;
        },
        setAdminList (state, adminList) {
            state.adminList = adminList;
        }
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadAdminInfo ({commit}) {
            AdminAPI.getAdminInfo()
                .then((response) => {
                    setMenuTree(response.data.menuTree);
                    commit('setAdminInfo', response.data.admins);
                })
                .catch((error) => {
                    commit('setAdminInfo', [])
                });
        },
        loadAdminList ({commit}) {
            AdminAPI.getAdminList()
                .then((response) => {
                    commit('setAdminList', response.data);
                })
                .catch((error) => {
                    commit('setAdminList', []);
                });
        }
    }
    
 }