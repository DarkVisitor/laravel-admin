<?php
/**
 * Administrator service.
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 23:26
 */

namespace App\Services;


use App\Repositories\AdminRepository;
use Illuminate\Support\Facades\Hash;

class AdminService
{
    protected $adminRepository;

    public function __construct(AdminRepository $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }

    public function loginBackendSystem($request)
    {
        $validated = $request->validated();

        $admins = $this->adminRepository->findByAdminLogin($validated['username']);
        info($admins);
        if ($admins){
            if (Hash::check($validated['password'], $admins['password'])){
                //颁发令牌
                /*$http = new \GuzzleHttp\Client([
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

                $response = json_decode((string) $response->getBody(), true);*/
                $response["users"] = $admins;
                return response()->json(["code" => 0, "msg" => "success", "data" => $response]);
            }
        }

        return response()->json(['code' => 40001, 'msg' => '用户名或密码不正确!']);
    }
}