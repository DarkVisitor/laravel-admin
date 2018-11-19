<?php

namespace App\Http\Controllers\Admin;


use App\Http\Requests\RolePost;
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
        return $this->roleService->indexRoles();
    }


    /**
     * Save role data.
     *
     * @param RolePost $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function save(RolePost $request)
    {
        return $this->roleService->save($request);
    }


    /**
     * Edit user group information.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request)
    {
        $data = $this->roleService->getRoleInfo($request);

        return response()->json(["code" => 0, "msg" => "success", "data" => $data]);
    }


    /**
     * Delete user group.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request)
    {
        return $this->roleService->delRole($request);
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