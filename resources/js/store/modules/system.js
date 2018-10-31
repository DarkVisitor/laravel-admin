/*
 |-------------------------------------------------------------------------------
 | VUEX modules/system.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the system.
 */

import SystemAPI from '@js/api/system.js';
import {setMenuTree} from '@js/libs/util.js';

export const system = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        menuTree: []
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getMenuTree (state){
            return state.menuTree;
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setMenuTree (state, menuTree){
            state.menuTree = menuTree;
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
        }
    }
    
 }