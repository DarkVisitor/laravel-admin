<?php
/**
 * System Controller
 * 系统控制器模块
 * User: Loner
 * Date: 2018/10/8
 * Time: 14:31
 */

namespace App\Http\Controllers\Admin;


use App\Services\SystemService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SystemController extends Controller
{
    protected $systemService;

    public function __construct(SystemService $systemService)
    {
        $this->systemService = $systemService;
    }


    /**
     * 初始化应用后台菜单
     * @param Request $request
     */
    public function initAdminMenu(Request $request)
    {
        return $this->systemService->initAppAdminMenu($request);
    }
}