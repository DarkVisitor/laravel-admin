<?php
/**
 * Application initialization.
 * User: DarkVisitor
 * Date: 2018/10/10
 * Time: 16:39
 */

namespace App\Http\Controllers\Admin;


use App\Services\AdminService;

class IndexController
{
    protected $adminService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

    public function test()
    {
        $this->adminService->getAdminInfo();
    }
}