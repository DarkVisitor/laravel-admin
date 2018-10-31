<?php

namespace App\Http\Controllers\Admin;


use App\Services\RoleService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class RoleController extends Controller
{
    protected $roleService;

    public function __construct(RoleService $roleService)
    {
        $this->roleService = $roleService;
    }


    public function index()
    {
        return $this->roleService->index();
    }


    /**
     * 保存数据
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function save(Request $request)
    {
        return $this->roleService->save($request);
    }


    /**
     * 获取用户组信息
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function roleInfo(Request $request)
    {
        $data = $this->roleService->getInfo($request);

        return response()->json(["code" => 0, "msg" => "success", "data" => $data]);
    }


    /**
     * 获取用户组权限
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function distributeAuthority(Request $request)
    {
        return $this->roleService->distributeAuthority($request);
    }


    /**
     * 保存用户组权限数据
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveRoleAuth(Request $request)
    {
        return $this->roleService->postDistributeAuthority($request);
    }



}