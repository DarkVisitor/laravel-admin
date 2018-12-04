<?php
/**
 * Created by PhpStorm.
 * User: YingQuan-han
 * Date: 2018/11/19
 * Time: 11:45
 */

namespace App\Services;


use App\Repositories\AdminRepository;
use App\Repositories\ModuleRepository;
use App\Repositories\RoleRepository;
use App\Traits\ModuleTrait;

class RoleService
{
    use ModuleTrait;

    protected $roleRepository;
    protected $adminRepository;
    protected $moduleRepository;

    public function __construct(RoleRepository $roleRepository, AdminRepository $adminRepository, ModuleRepository $moduleRepository)
    {
        $this->roleRepository = $roleRepository;
        $this->adminRepository = $adminRepository;
        $this->moduleRepository = $moduleRepository;
    }


    /**
     * Get user group list.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexRoles()
    {
        $roles = $this->roleRepository->getAllByRole();

        return response()->json(['code' => 0, 'msg' => 'success', 'data' => $roles]);
    }


    /**
     * Get user group information.
     *
     * @param $request
     * @return mixed
     */
    public function getRoleInfo($request)
    {
        return $this->roleRepository->find($request->id);
    }


    /**
     * Save role data.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function save($request)
    {
        if ($request->filled('id')){
            $roles = $this->roleRepository->find($request->id);
        }else{
            $roles = app($this->roleRepository->model());
        }
        $roles->title = $request->title;
        $roles->remarks = $request->remarks;
        $boole = $roles->save();
        if ($boole){
            return response()->json(['code' => 0, 'msg' => '已保存']);
        }else{
            return response()->json(['code' => 44001, 'msg' => '操作失败']);
        }
    }


    /**
     * Delete user group.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delRole($request)
    {
        $boole = $this->roleRepository->delete($request->id);
        if ($boole){
            return response()->json(['code' => 0, 'msg' => '已删除']);
        }else{
            return response()->json(['code' => 44001, 'msg' => '操作失败']);
        }
    }


    /**
     * Get user group members
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRoleMembers($request)
    {
        if (!$request->filled('id')){
            return response()->json(['code' => 43001, 'msg' => '未知错误: Invalid parameter id']);
        }

        $roleByAdmins = $this->adminRepository->findRoleByAdmin($request->id);
        $admins = $this->adminRepository->allByAdmin();
        if ($admins){
            $roleMembers = [];
            foreach ($admins as $key=>$item){
                $admins[$key]['key'] = $item['id'];
                $admins[$key]['label'] = $item['name'];
            }
            if ($roleByAdmins){
                foreach ($admins as $key=>$item){
                    foreach ($roleByAdmins as $member){
                        if ($item['id'] == $member['id']){
                            $roleMembers[] = $item['key'];
                        }
                    }
                }
            }

            return response()->json(['code' => 0, 'msg' => 'success', 'adminList' => $admins, 'roleMembers' => $roleMembers]);
        }else{
            return response()->json(['code' => 44004, 'msg' => '暂无数据']);
        }
    }


    /**
     * Save Administrators group members.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveAdminGroupMember($request)
    {
        if (!$request->filled('id')){
            return response()->json(['code' => 43001, 'msg' => '未知错误: Invalid parameter id']);
        }
        if (!$request->filled('member')){
            return response()->json(['code' => 43001, 'msg' => '未知错误: Invalid parameter member']);
        }

        $roles = $this->roleRepository->find($request->id);
        $boole = $roles->belongsToManyAdmin()->sync($request->member);
        if ($boole){
            return response()->json(['code' => 0, 'msg' => '已保存']);
        }else{
            return response()->json(['code' => 44001, 'msg' => '操作失败']);
        }
    }


    /**
     * Get permissions for role group assignment.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function allotRoleGroupByAuthority($request)
    {
        if (!$request->filled('id')){
            return response()->json(['code' => 44001, 'msg' => 'Invalid parameter id']);
        }

        $modules = $this->moduleRepository->findNormalByModule();
        $roles = $this->roleRepository->find($request->id);
        $roleByModules = [];
        if ($roles){
            $roleByModules = $this->moduleRepository->findRoleByModule(explode(',', $roles->authority));
            if ($roleByModules){
                $roleByModules = array_column($roleByModules, 'id');
            }
        }
        $authority = $this->authorityTree($modules, 0, $roleByModules);

        if ($modules){
            return response()->json(['code' => 0, 'msg' => 'success', 'authTree' => $authority]);
        }else{
            return response()->json(['code' => 44004, 'msg' => '暂无数据']);
        }
    }


    /**
     * Save Administrator Group Permissions.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveAdminGroupAuth($request)
    {
        if (!$request->filled('id')){
            return response()->json(['code' => 44001, 'msg' => 'Invalid parameter id']);
        }
        if (!$request->filled('authority')){
            return response()->json(['code' => 44001, 'msg' => 'Invalid parameter authority']);
        }
        $roles = $this->roleRepository->findBy($request->id);
        if (!$roles){
            return response()->json(['code' => 44004, 'msg' => '用户组不存在']);
        }
        $authority = implode(",", $this->analyzeAuthorityTree($request->authority));
        $boole = $this->roleRepository->update($request->id, ['authority' => $authority]);
        if ($boole){
            return response()->json(["code" => 0, "msg" => "success"]);
        }else{
            return response()->json(["code" => 10002, "msg" => "fail"]);
        }
    }
}