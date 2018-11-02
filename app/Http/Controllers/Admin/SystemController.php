<?php
/**
 * System Controller.
 *
 * User: YingQuan-han
 * Date: 2018/10/8
 * Time: 14:31
 */

namespace App\Http\Controllers\Admin;

use App\Services\ModuleService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SystemController extends Controller
{
    protected $moduleService;

    public function __construct(ModuleService $moduleService)
    {
        $this->moduleService = $moduleService;
    }


    /**
     * Get the administrator access to the application menu.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function canAccessMenu(Request $request)
    {
        return $this->moduleService->initializeBackendAppMenu($request);
    }
}