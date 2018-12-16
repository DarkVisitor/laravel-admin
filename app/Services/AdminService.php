<?php
/**
 * Administrator service.
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 23:26
 */

namespace App\Services;


use App\Repositories\AdminPasswordRepository;
use App\Repositories\AdminRepository;
use App\Repositories\ModuleRepository;
use App\Repositories\RoleRepository;
use App\Traits\ModuleTrait;
use App\Traits\PassportTrait;
use Illuminate\Support\Facades\Hash;

class AdminService
{
    use PassportTrait, ModuleTrait;

    protected $adminRepository;
    protected $roleRepository;
    protected $moduleRepository;
    protected $adminPasswordRepository;

    public function __construct(
        AdminRepository $adminRepository,
        RoleRepository $roleRepository,
        ModuleRepository $moduleRepository,
        AdminPasswordRepository $adminPasswordRepository)
    {
        $this->adminRepository = $adminRepository;
        $this->roleRepository = $roleRepository;
        $this->moduleRepository = $moduleRepository;
        $this->adminPasswordRepository = $adminPasswordRepository;
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
        if (strtolower($validated['verify_code']) !== $request->session()->pull('verify_code')){
            return response()->json(['code' => 54001, 'msg' => '验证码不正确']);
        }
        $admins = $this->adminRepository->findByAdminLogin($validated['username']);
        if ($admins){
            $admins = $admins->toArray();
            info($admins);
            if ($admins['status']){
                if ($admins['has_one_password'] && $admins['has_one_password']['error_num'] >= 5){
                    return response()->json(['code' => 54002, 'msg' => '密码错误已达 5 次，请一天后再试!']);
                }else{
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
                    }else{
                        $this->adminPasswordRepository->updateOrCreate($admins['id']);
                        if ($admins['has_one_password']){
                            $surplus = 5 - $admins['has_one_password']['error_num'];
                        }else{
                            $surplus = 4;
                        }
                        return response()->json(['code' => 40002, 'msg' => '登录密码错误，剩余 '. $surplus .' 次错误机会']);
                    }
                }
            }else{
                return response()->json(['code' => 54005, 'msg' => '账号已禁止使用']);
            }
        }

        return response()->json(['code' => 40001, 'msg' => '账户不存在，请确认后再登录!']);
    }


    /**
     * Get current administrator information.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAdminInfo()
    {
        $admins = auth('admin')->user()->toArray();
        $roles = $this->roleRepository->findAdminByRole($admins['id']);
        $authority = array();
        if ($roles){
            foreach ($roles as $role){
                $authority = array_merge($authority, explode(",", $role["authority"]));
            }
        }
        $menuTree = array();
        if ($authority){
            $modules = $this->moduleRepository->getRoleByModule($authority);

            if ($modules){
                $menuTree = $this->authorityTree($modules);
            }
        }

        return response()->json(['code' => 0, 'msg' => 'success', 'admins' => $admins, 'menuTree' => $menuTree]);
    }


    /**
     * Get administrator list.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAdminList()
    {
        $admins = $this->adminRepository->allByAdmin();

        if ($admins){
            foreach ($admins as $key=>$item){
                $admins[$key]['key'] = $key;
                $admins[$key]['label'] = $item['name'];
            }
            return response()->json(['code' => 0, 'msg' => 'success', 'data' => $admins]);
        }else{
            return response()->json(['code' => 44001, 'msg' => '暂无数据']);
        }
    }
}