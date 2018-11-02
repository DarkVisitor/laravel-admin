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
        if ($roles->isNotEmpty()){
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
}