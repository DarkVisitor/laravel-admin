/*
 |-------------------------------------------------------------------------------
 | VUEX modules/essay.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the essay.
 */

import  EssayAPI from '@js/api/essay.js';

export const essay = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        essayList: [],
        categoryList: [],
        tagList: [],
        pageTotal: 0,
        webEssayList: [],
        webPageIndex: 1,
        webPageLast: 0,
        webEssayDetail: [],
        newEssayList: []
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getEssayList (state) {
            return state.essayList;
        },
        getCategoryList (state) {
            return state.categoryList;
        },
        getTagList (state) {
            return state.tagList;
        },
        getPageTotal (state) {
            return state.pageTotal;
        },
        getWebEssayList (state) {
            return state.webEssayList;
        },
        getWebEssayDetail (state) {
            return state.webEssayDetail;
        },
        getWebPageIndex (state) {
            return state.webPageIndex;
        },
        getWebPageLast (state) {
            return state.webPageLast;
        },
        getNewEssayList (state) {
            return state.newEssayList;
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setEssayList (state, essayList) {
            state.essayList = essayList;
        },
        setCategoryList (state, categoryList) {
            state.categoryList = categoryList;
        },
        setTagList (state, tagList) {
            state.tagList = tagList;
        },
        setPageTotal (state, total) {
            state.pageTotal = total;
        },
        setWebEssayList (state, essayList) {
            state.webEssayList = essayList;
        },
        setWebEssayDetail (state, detail) {
            state.webEssayDetail = detail;
        },
        setWebPageIndex (state, index) {
            state.webPageIndex = index;
        },
        setWebPageLast (state, last) {
            state.webPageLast = last;
        },
        setNewEssayList (state, list) {
            state.newEssayList = list;
        }
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadEssayList ({commit}, params) {
            EssayAPI.getEssayList(params)
                .then(function(response){
                    let res = response.data;
                    let result = res.data;
                    commit('setEssayList', result.data);
                    commit('setPageTotal', result.total);
                })
                .catch(function(){
                    commit('setEssayList', []);
                    commit('setPageTotal', 0);
                });
        },
        loadCategoryList ({commit}) {
            EssayAPI.getAllCategory()
                .then(function(response){
                    commit('setCategoryList', response.data);
                })
                .catch(function(){
                    commit('setCategoryList', []);
                });
        },
        loadTagList ({commit}) {
            EssayAPI.getAllTag()
                .then(function(response){
                    commit('setTagList', response.data);
                })
                .catch(function(){
                    commit('setTagList', []);
                });
        },
        loadWebEssayList ({commit}, params) {
            EssayAPI.getWebEssayList(params)
                .then(function(response){
                    let res = response.data;
                    let result = res.data;
                    commit('setWebEssayList', result.data);
                    commit('setWebPageIndex', result.current_page);
                    commit('setWebPageLast', result.last_page);
                })
                .catch(function(){
                    commit('setWebEssayList', []);
                    commit('setWebPageIndex', 1);
                    commit('setWebPageLast', 0);
                });
        },
        loadWebEssayDetail ({commit}, data) {
            EssayAPI.getWebEssayDetail(data)
                .then(function(response){
                    commit('setWebEssayDetail', response.data)
                })
                .catch(function(){
                    commit('setWebEssayDetail', []);
                });
        },
        loadNewEssayList ({commit}, params) {
            EssayAPI.getWebEssayList(params)
                .then(function(response){
                    let res = response.data;
                    let result = res.data;
                    commit('setNewEssayList', result.data);
                })
                .catch(function(){
                    commit('setNewEssayList', []);
                });
        }
    }
    
 }