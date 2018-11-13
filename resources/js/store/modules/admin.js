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
        adminInfo: []
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getAdminInfo (state) {
            return state.adminInfo;
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setAdminInfo (state, adminInfo) {
            state.adminInfo = adminInfo;
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
        }
    }
    
 }