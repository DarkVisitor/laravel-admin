<?php
/**
 * Backend login controller
 * User: YingQuan-han
 * Date: 2018/10/11
 * Time: 15:07
 */

namespace App\Http\Controllers\Admin;


use App\Http\Requests\AdminLoginPost;
use App\Http\Requests\ResetPassword;
use App\Services\AdminService;
use Gregwar\Captcha\CaptchaBuilder;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    protected $adminService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }


    /**
     * Login back end application and get token.
     *
     * @param AdminLoginPost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function token(AdminLoginPost $request)
    {
        return $this->adminService->loginBackendSystem($request);
    }

    /**
     * Get verify code.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVerifyCode()
    {
        $builder = new CaptchaBuilder();
        $builder->build($width = 144, $height = 32, $font = null);
        $phrase = $builder->getPhrase();

        // 将验证码内容存储在一次性 session 中
        Session::put('verify_code', $phrase);

        return response()->json(['code' => 0, 'msg' => 'success', 'verify_code' => 'data:image/jpeg;base64,' . base64_encode($builder->get())]);
    }


    /**
     * Forget passwords and reset them.
     *
     * @param ResetPassword $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forget(ResetPassword $request)
    {
        return $this->adminService->resetPassword($request);
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