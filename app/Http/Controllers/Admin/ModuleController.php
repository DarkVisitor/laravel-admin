<?php
namespace App\Http\Controllers\Admin;


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
     * 获取module列表数据
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->moduleService->getList();
    }


    /**
     * 获取menu module 数据
     * @return \Illuminate\Http\JsonResponse
     */
    public function isMenuModule()
    {
        return $this->moduleService->getIsMenuModule();
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
    public function save(Request $request)
    {
        return $this->moduleService->save($request);
    }


    /**
     * update module status
     * @param Request $request
     * @return mixed
     */
    public function updateStatus(Request $request)
    {
        return $this->moduleService->updateStatus($request);
    }


    /**
     * delete module
     * @param Request $request
     * @return mixed
     */
    public function delete(Request $request)
    {
        return $this->moduleService->delete($request);
    }
}