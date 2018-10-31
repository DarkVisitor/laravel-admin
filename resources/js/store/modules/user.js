/*
 |-------------------------------------------------------------------------------
 | VUEX modules/user.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the user.
 */

 export const user = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        userName: '',
        userAvator: ''
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        handleLogin ({commit}, {userName, password}) {
            commit('setUserName', userName);
        }
    },
    /**
     * Defines the mutations used.
     */
    mutations: {
        setUserName (state, userName) {
            state.userName = userName;
        },
        setUserAvator (state, userAvator) {
            state.userAvator = userAvator;
        }
    },
    /**
     * Defines the getters used by the module.
     */
    getters: {
        getUserName (state) {
            return state.userName;
        },
        getUserAvator (state) {
            return state.userAvator;
        }
    }
}