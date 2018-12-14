<?php
/**
 * Administrator service.
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 23:26
 */

namespace App\Services;


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

    public function __construct(AdminRepository $adminRepository, RoleRepository $roleRepository, ModuleRepository $moduleRepository)
    {
        $this->adminRepository = $adminRepository;
        $this->roleRepository = $roleRepository;
        $this->moduleRepository = $moduleRepository;
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
        if (strtolower($validated['verify_code']) !== $request->session()->get('verify_code')){
            return response()->json(['code' => 54001, 'msg' => '验证码不正确']);
        }
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