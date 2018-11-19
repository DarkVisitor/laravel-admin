<?php
/**
 * Created by PhpStorm.
 * User: YingQuan-han
 * Date: 2018/11/19
 * Time: 11:45
 */

namespace App\Services;


use App\Repositories\RoleRepository;

class RoleService
{
    protected $roleRepository;

    public function __construct(RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
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
}