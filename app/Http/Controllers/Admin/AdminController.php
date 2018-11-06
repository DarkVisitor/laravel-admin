<?php
/**
 * Administrator module.
 * User: YingQuan-han
 * Date: 2018/11/6
 * Time: 16:12
 */

namespace App\Http\Controllers\Admin;


use App\Services\AdminService;
use Illuminate\Routing\Controller;

class AdminController extends Controller
{
    protected $adminService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }


    /**
     * Get current administrator information.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAdminInfo()
    {
        return $this->adminService->getAdminInfo();
    }
}