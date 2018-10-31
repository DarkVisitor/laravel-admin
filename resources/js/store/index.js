/*
 |-------------------------------------------------------------------------------
 | VUEX store.js
 |-------------------------------------------------------------------------------
 | Builds the data store from all of the modules for the Roast app.
 */

 /**
  * Adds the promise polyfill for IE 11.
  */
 require('es6-promise').polyfill();


 /**
  * Import Vue and Vuex.
  */
 import Vue from 'vue';
 import Vuex from 'vuex';


 /**
  * Initializes Vuex on Vue.
  */
 Vue.use(Vuex);


 /**
  * Imports all of the modules used in the application to build the data store.
  */
 import { app } from './modules/app.js';
 import { user } from './modules/user.js';
 import { adminModule } from './modules/admin-module.js';
 import { role } from './modules/role.js';
 import { essay } from './modules/essay.js';
 import { system } from './modules/system.js';


 /**
  * Export our data store.
  */
 export default new Vuex.Store({
     modules: {
        app,
        user,
        adminModule,
        role,
        essay,
        system,
     }
 });