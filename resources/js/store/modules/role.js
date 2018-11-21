/*
 |-------------------------------------------------------------------------------
 | VUEX modules/role.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the role.
 */


import RoleAPI from '@js/api/role.js'; 

export const role = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        roles: [],
        roleInfo: [],
        roleAuth: []
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getRoleList (state) {
            return state.roles;
        },
        getRoleInfo (state) {
            return state.roleInfo;
        },
        getRoleAuth (state) {
            return state.roleAuth;
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setRoleList (state, roles) {
            state.roles = roles;
        },
        setRoleInfo (state, roleInfo) {
            state.roleInfo = roleInfo;
        },
        setRoleAuth (state, roleAuth) {
            state.roleAuth = roleAuth;
        }
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadRoleList ({commit}) {
            RoleAPI.getRoleList()
                .then(function(response){
                    commit('setRoleList', response.data);
                })
                .catch(function(){
                    commit('setRoleList', []);
                });
        },
        loadRoleInfo ({commit}, id) {
            RoleAPI.getRoleInfo({id:id})
                .then(function(response){
                    commit('setRoleInfo', response.data);
                })
                .catch(function(){
                    commit('setRoleInfo', []);
                });
        },
        loadRoleAuth({commit}, params) {
            RoleAPI.getRoleAuth(params)
                .then(function(response){
                    commit('setRoleAuth', response.data.authTree);
                })
                .catch(function(){
                    commit('setRoleAuth', []);
                });
        }
    }
 }