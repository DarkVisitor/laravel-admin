<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{query}', function () {
    return view('welcome');
})->where('query', '^((?!auth|api|web|backend).)*$');


/**
 * Web端路由组
 */
Route::group(['middleware' => 'web', 'prefix' => 'web', 'namespace' => 'Web'], function (){

});


/**
 * Web端 后台路由组
 */
Route::group(['middleware' => 'web', 'prefix' => 'backend', 'namespace' => 'Admin'], function (){
    /**
     * 后台登录
     */
    Route::post('/login', 'LoginController@token');

    Route::get('/signin', 'LoginController@userToken');


    Route::group(['middleware' => 'auth:admin'], function (){
        /**
         * Initialization application.
         */
        Route::get('/initMenu', 'SystemController@canAccessMenu');
        Route::get('/getAdminInfo', 'IndexController@test');


        /**
         * Composite - system - administrator
         */
        Route::get('/getAdminInfo', 'AdminController@getAdminInfo');


        /**
         * Composite - system - modules
         */
        Route::get('/modules', 'ModuleController@index');
        Route::get('/navMenu', 'ModuleController@navMenuModule');
        Route::get('/editModule', 'ModuleController@edit');
        Route::post('/saveModule', 'ModuleController@save');


        /**
         * Composite - system - roles
         */
        Route::get('/roles', 'RoleController@index');
        Route::get('/editRole', 'RoleController@edit');
        Route::post('/saveRole', 'RoleController@save');
        Route::post('/delRole', 'RoleController@delete');

    });
});