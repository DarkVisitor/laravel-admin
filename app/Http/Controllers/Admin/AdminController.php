<?php
/**
 * Administrator module.
 * User: YingQuan-han
 * Date: 2018/11/6
 * Time: 16:12
 */

namespace App\Http\Controllers\Admin;


use App\Http\Requests\AdminPost;
use App\Services\AdminService;
use Illuminate\Http\Request;
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


    /**
     * Get administrator list.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAdminList(Request $request)
    {
        return $this->adminService->getAdminList($request);
    }


    /**
     * Find admin first record.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function findAdminFirst(Request $request)
    {
        return $this->adminService->findAdminFirst($request);
    }


    /**
     * Create administrator information.
     *
     * @param AdminPost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(AdminPost $request)
    {
        return $this->adminService->save($request);
    }


    /**
     * Edit administrator information.
     *
     * @param AdminPost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(AdminPost $request)
    {
        return $this->adminService->save($request);
    }


    /**
     * Update account status.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateAccountStatus(Request $request)
    {
        return $this->adminService->updateAccountStatus($request);
    }


    /**
     * Delete account info.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteAccountInfo(Request $request)
    {
        return $this->adminService->delete($request);
    }
}