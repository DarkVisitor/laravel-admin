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


    public function findRole(Request $request)
    {
        $data = $this->roleService->getRoleInfo($request);

        return response()->json(["code" => 0, "msg" => "success", "data" => $data]);
    }


    /**
     * Create role information.
     *
     * @param RolePost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(RolePost $request)
    {
        return $this->roleService->save($request);
    }


    /**
     * Edit role information.
     *
     * @param RolePost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(RolePost $request)
    {
        return $this->roleService->save($request);
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
     * Get permissions for role group assignment.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function allotAuthority(Request $request)
    {
        return $this->roleService->allotRoleGroupByAuthority($request);
    }


    /**
     * Save Administrator Group Permissions.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveRoleAuth(Request $request)
    {
        return $this->roleService->saveAdminGroupAuth($request);
    }


    /**
     * Get role group members.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function roleMember(Request $request)
    {
        return $this->roleService->getRoleMembers($request);
    }


    /**
     * Save members assigned to role groups.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function allotMember(Request $request)
    {
        return $this->roleService->saveAdminGroupMember($request);
    }


}