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

/*Route::get('/{query}', function () {
    return view('welcome');
})->where('query', '^((?!auth|api|web|backend).)*$');*/

Route::get('/admin/{query}', function ($query) {
    info($query);
    return view('welcome');
})->where('query', '.*');

Route::get('/admin', function () {
    return response()->redirectTo('/admin/home');
});

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

    // Get verify code.
    Route::get('/getVerifyCode', 'LoginController@getVerifyCode');

    Route::post('/sendVerifyCode', 'SystemController@sendVerifyCode');

    Route::post('/forget', 'LoginController@forget');


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
        Route::get('/getAdminList', 'AdminController@getAdminList');
        Route::get('/findAdminFirst', 'AdminController@findAdminFirst');
        Route::post('/createAdmin', 'AdminController@create')->name('createAdministrator');
        Route::post('/editAdmin', 'AdminController@edit')->name('editAdministrator');
        Route::post('/delAdmin', 'AdminController@deleteAccountInfo')->name('delAdministrator');
        Route::post('/updateAdminStatus', 'AdminController@updateAccountStatus')->name('updateAdministratorStatus');


        /**
         * Composite - system - modules
         */
        Route::get('/modules', 'ModuleController@index');
        Route::get('/navMenu', 'ModuleController@navMenuModule');
        Route::get('/editModule', 'ModuleController@edit');
        Route::post('/saveModule', 'ModuleController@save');
        Route::post('/delModule', 'ModuleController@delete');
        Route::post('/updateModuleStatus', 'ModuleController@updateStatus');


        /**
         * Composite - system - roles
         */
        Route::get('/roles', 'RoleController@index');
        Route::get('/editRole', 'RoleController@edit');
        Route::post('/saveRole', 'RoleController@save');
        Route::post('/delRole', 'RoleController@delete');
        Route::get('/roleMember', 'RoleController@roleMember');
        Route::post('/allotMember', 'RoleController@allotMember');
        Route::get('/roleAuth', 'RoleController@allotAuthority');
        Route::post('/allotAuth', 'RoleController@saveRoleAuth');

    });
});