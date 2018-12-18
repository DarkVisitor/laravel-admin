<?php
/**
 * System Controller.
 *
 * User: YingQuan-han
 * Date: 2018/10/8
 * Time: 14:31
 */

namespace App\Http\Controllers\Admin;

use App\Http\Requests\VerifyCode;
use App\Services\ModuleService;
use App\Services\SystemService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SystemController extends Controller
{
    protected $moduleService;
    protected $systemService;

    public function __construct(ModuleService $moduleService, SystemService $systemService)
    {
        $this->moduleService = $moduleService;
        $this->systemService = $systemService;
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


    /**
     * Send SMS or Email verification code.
     *
     * @param VerifyCode $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function sendVerifyCode(VerifyCode $request)
    {
        return $this->systemService->sendVerifyCode($request);
    }
}