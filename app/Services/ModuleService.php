<?php
/**
 * System module service
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 13:36
 */

namespace App\Services;

use App\Repositories\ModuleRepository;
use App\Repositories\RoleRepository;
use App\Traits\ModuleTrait;
use Illuminate\Support\Facades\Log;

class ModuleService
{
    use ModuleTrait;

    protected $roleRepository;
    protected $moduleRepository;

    public function __construct(RoleRepository $roleRepository, ModuleRepository $moduleRepository)
    {
        $this->roleRepository = $roleRepository;
        $this->moduleRepository = $moduleRepository;
    }

    /**
     * Initializing the background application menu
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function initializeBackendAppMenu($request)
    {
        if (!$request->filled('id')){
            Log::error('Invalid parameter ID');
            return response()->json(['code' => 40001, 'msg' => 'Invalid parameter ID']);
        }

        $roles = $this->roleRepository->findAdminByRole($request->id);
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

        return response()->json(['code' => 0, 'msg' => 'success', 'data' => $menuTree]);
    }


    /**
     * Get module list.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexModules()
    {
        $modules = $this->moduleRepository->getAllByModule();

        if ($modules){
            $modules = $this->sortParentChild($modules);
            foreach ($modules as $key=>$module){
                $modules[$key]['loading'] = false;
            }
        }

        return response()->json(['code' => 0, 'msg' => 'success', 'data' => $modules]);
    }


    /**
     * Save the data.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function save($request)
    {
        if ($request->filled('id')){
            $modules = $this->moduleRepository->find($request->id);
        }else{
            $modules = app($this->moduleRepository->model());
        }
        $modules->parent_id = $request->parent_id;
        $modules->title = $request->title;
        $modules->vue_router_path = $request->vue_router_path;
        $modules->vue_router_name = $request->vue_router_name;
        $modules->vue_file_path = $request->vue_file_path;
        $modules->laravel_router_path = $request->laravel_router_path;
        $modules->is_menu = $request->is_menu;
        $modules->icon = $request->icon;
        $modules->status = $request->status;
        $modules->sort = $request->sort;
        $boole = $modules->save();
        if ($boole){
            return response()->json(['code' => 0, 'msg' => '已保存']);
        }else{
            return response()->json(['code' => 10001, 'msg' => '操作失败']);
        }
    }


    /**
     * Get navigation menu.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function navMenuModules()
    {
        $modules = $this->moduleRepository->getNavMenuModule();
        if ($modules){
            $modules = $this->sortParentChild($modules);
        }

        return response()->json(['code' => 0, 'msg' => 'success', 'data' => $modules]);
    }


    /**
     * Get module information.
     *
     * @param $request
     * @return mixed
     */
    public function getInfo($request)
    {
        return $this->moduleRepository->findBy($request->id);
    }


    /**
     * Delete module record.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteModules($request)
    {
        if (!$request->filled('id')){
            return response()->json(['code' => 44001, 'msg' => 'Invalid parameter id']);
        }
        $childModules = $this->moduleRepository->findModuleChildren($request->id);
        if ($childModules){
            return response()->json(['code' => 43001, 'msg' => '菜单下存在子菜单!']);
        }
        $boole = $this->moduleRepository->delete($request->id);
        if ($boole){
            return response()->json(['code' => 0, 'msg' => '已删除']);
        }else{
            return response()->json(['code' => 10001, 'msg' => '操作失败']);
        }
    }


    /**
     * Update module status.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateModuleStatus($request)
    {
        if (!$request->filled('id')){
            return response()->json(['code' => 44001, 'msg' => 'Invalid parameter id']);
        }
        if (!$request->filled('status')){
            return response()->json(['code' => 44001, 'msg' => 'Invalid parameter status']);
        }
        $boole = $this->moduleRepository->update($request->id, ['status' => $request->status]);
        if ($boole){
            return response()->json(['code' => 0, 'msg' => '已更新']);
        }else{
            return response()->json(['code' => 10001, 'msg' => '操作失败']);
        }
    }
}