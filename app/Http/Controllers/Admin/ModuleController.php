<?php
namespace App\Http\Controllers\Admin;


use App\Http\Requests\ModulePost;
use App\Services\ModuleService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ModuleController extends Controller
{
    protected $moduleService;

    public function __construct(ModuleService $moduleService)
    {
        $this->moduleService = $moduleService;
    }


    /**
     * Get module list.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->moduleService->indexModules();
    }


    /**
     * Get navigation menu.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function navMenuModule()
    {
        return $this->moduleService->navMenuModules();
    }


    /**
     * 编辑数据
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request)
    {
        $data = $this->moduleService->getInfo($request);

        return response()->json(["code" => 0, "msg" => "success", "data" => $data]);
    }


    /**
     * save data
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(ModulePost $request)
    {
        return $this->moduleService->save($request);
    }


    /**
     * Update module status.
     *
     * @param Request $request
     * @return mixed
     */
    public function updateStatus(Request $request)
    {
        return $this->moduleService->updateModuleStatus($request);
    }


    /**
     * Delete module record.
     *
     * @param Request $request
     * @return mixed
     */
    public function delete(Request $request)
    {
        return $this->moduleService->deleteModules($request);
    }
}