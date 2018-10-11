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
    Route::get('/login', 'LoginController@token');

    Route::group(['middleware' => 'auth:admin'], function (){

    });
});