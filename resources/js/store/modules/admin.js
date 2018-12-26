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
        adminList: {},
        permission: [],
        adminFirst: []
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
        },
        getPermission (state) {
            return state.permission;
        },
        getAdminFirst(state) {
            return state.adminFirst;
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
        },
        setPermission (state, permission) {
            state.permission = permission;
        },
        setAdminFirst(state, adminFirst) {
            state.adminFirst = adminFirst;
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
                    commit('setPermission', response.data.menuTree);
                })
                .catch((error) => {
                    commit('setAdminInfo', []);
                    commit('setPermission', []);
                });
        },
        loadAdminList ({commit}, params) {
            AdminAPI.getAdminList(params)
                .then((response) => {
                    commit('setAdminList', response.data.list);
                })
                .catch((error) => {
                    commit('setAdminList', []);
                });
        },
        findAdminList({commit}, params) {
            AdminAPI.findAdminFirst(params)
                .then((res) => {
                    commit('setAdminFirst', res.data.info);
                })
                .catch((err) => {
                    commit('setAdminFirst', []);
                });
        }
    }
    
 }