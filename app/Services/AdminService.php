<?php
/**
 * Administrator service.
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 23:26
 */

namespace App\Services;


use App\Repositories\AdminRepository;
use App\Traits\PassportTrait;
use Illuminate\Support\Facades\Hash;

class AdminService
{
    use PassportTrait;

    protected $adminRepository;

    public function __construct(AdminRepository $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }

    /**
     * Login backend system.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginBackendSystem($request)
    {
        $validated = $request->validated();

        $admins = $this->adminRepository->findByAdminLogin($validated['username']);

        if ($admins){
            if (Hash::check($validated['password'], $admins['password'])){
                //颁发令牌
                $response = $this->requestingToken('admins');
                if (!$response){
                    return response()->json(['code' => 50001, 'msg' => '登录失败']);
                }
                $response["admins"] = $admins;
                return response()->json(["code" => 0, "msg" => "success", "data" => $response]);
            }
        }

        return response()->json(['code' => 40001, 'msg' => '用户名或密码不正确!']);
    }
}