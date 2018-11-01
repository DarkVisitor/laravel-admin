<?php
/**
 * Backend login controller
 * User: YingQuan-han
 * Date: 2018/10/11
 * Time: 15:07
 */

namespace App\Http\Controllers\Admin;


use App\Http\Requests\AdminLoginPost;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class LoginController extends Controller
{
    public function __construct()
    {

    }


    public function token(AdminLoginPost $request)
    {
        $validated = $request->validated();
        info($validated);
        $http = new \GuzzleHttp\Client([
            "debug" => false
        ]);
        $response = $http->request('POST', env('APP_URL').'/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'qG4cLvhTkSJ1W0gJWLtpEwNeMrlQ1hU0XmZcG1Oi',
                'username' => 'admin',
                'password' => '123456',
                'scope' => '*',
                'provider' => 'admins'
            ],
        ]);

        $response = json_decode((string) $response->getBody(), true);
        //$response["users"] = $users->toArray();
        return response()->json(["code" => 0, "msg" => "success", "data" => $response]);
        //return response()->json(['code' => 0, 'msg' => 'success']);
    }


    public function userToken()
    {
        $http = new \GuzzleHttp\Client([
            "debug" => false
        ]);
        $response = $http->request('POST', env('APP_URL').'/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'qG4cLvhTkSJ1W0gJWLtpEwNeMrlQ1hU0XmZcG1Oi',
                'username' => 'root',
                'password' => '123456',
                'scope' => '*',
                'provider' => 'users'
            ],
        ]);

        $response = json_decode((string) $response->getBody(), true);
        return response()->json(["code" => 0, "msg" => "success", "data" => $response]);
    }

}