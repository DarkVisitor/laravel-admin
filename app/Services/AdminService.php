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
                //存储登录用户信息
                $request->session()->put('admins', $admins);
                $request->session()->save();

                //颁发令牌
                $response = $this->requestingToken('admins');
                if (!$response){
                    return response()->json(['code' => 50001, 'msg' => '登录失败']);
                }

                return response()->json(["code" => 0, "msg" => "success", "data" => $response]);
            }
        }

        return response()->json(['code' => 40001, 'msg' => '用户名或密码不正确!']);
    }


    /**
     * Get current administrator information.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAdminInfo()
    {
        $admins = auth('admin')->user()->toArray();

        return response()->json(['code' => 0, 'msg' => 'success', 'data' => $admins]);
    }
}