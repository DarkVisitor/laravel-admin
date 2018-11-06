/*
 |-------------------------------------------------------------------------------
 | VUEX modules/app.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the admin module.
 */


import ModuleAPI from '@js/api/module.js';

 export const adminModule = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        moduleList: [],
        isMenuModule: [],
        moduleInfo: {}
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadModule ({commit}) {
            ModuleAPI.getModuleList()
                .then(function(response){
                    commit('setModuleList', response.data);
                })
                .catch(function(){
                    commit('setModuleList', []);
                });
        },
        loadIsMenuModule ({commit}) {
            ModuleAPI.getNavMenuModule()
                .then(function(response){
                    commit('setMenuModule', response.data)
                })
                .catch(function(){
                    commit('setMenuModule', []);
                });
        },
        loadModuleInfo ({commit}, id) {
            ModuleAPI.getModuleInfo(id)
                .then(function(response){
                    commit('setModuleInfo', response.data);
                })
                .catch(function(){
                    commit('setModuleInfo', {});
                });
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setModuleList (state, moduleList) {
            state.moduleList = moduleList;
        },
        setMenuModule (state, menuModule) {
            state.isMenuModule = menuModule;
        },
        setModuleInfo (state, moduleInfo) {
            state.moduleInfo = moduleInfo;
        }
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getModuleList (state) {
            return state.moduleList;
        },
        getMenuModule (state) {
            return state.isMenuModule;
        },
        getModuleInfo (state) {
            return state.moduleInfo;
        }
    }
 }