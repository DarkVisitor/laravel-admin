<?php
/**
 * System module repository
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 13:28
 */

namespace App\Repositories;


use App\Models\Module;

class ModuleRepository extends Repository
{
    public function model()
    {
        // TODO: Implement model() method.
        return Module::class;
    }


    /**
     * Get the module that the role has.
     *
     * @param array $authority
     * @return mixed
     */
    public function getRoleByModule(array $authority)
    {
        return $this->model
            ->whereIn('id', $authority)
            ->where('vue_router_path', '<>', '')
            ->orderBy("sort", "desc")
            ->get()
            ->toArray();
    }


    /**
     * Get role granularization permissions.
     *
     * @param array $authority
     * @return mixed
     */
    public function findSmallsPermit(array $authority)
    {
        return $this->model
            ->whereIn('id', $authority)
            ->where('is_menu', 0)
            ->select('laravel_router_path')
            ->get()
            ->toArray();
    }


    /**
     * Get all modules
     *
     * @return mixed
     */
    public function getAllByModule()
    {
        return $this->model
            ->orderBy('sort', 'desc')
            ->get()
            ->toArray();
    }


    /**
     * Get navigation menu.
     *
     * @return mixed
     */
    public function getNavMenuModule()
    {
        return $this->model
            ->where('is_menu', 1)
            ->orderBy('sort', 'desc')
            ->get()
            ->toArray();
    }


    /**
     * Get normal status module.
     *
     * @return mixed
     */
    public function findNormalByModule()
    {
        return $this->model
            ->where('status', 1)
            ->orderBy('sort', 'desc')
            ->get()
            ->toArray();
    }


    /**
     * Get permission from role group.
     *
     * @param array $authority
     * @return mixed
     */
    public function findRoleByModule(array $authority)
    {
        return $this->model
            ->whereIn('id', $authority)
            ->where('status', 1)
            ->get()
            ->toArray();
    }


    /**
     * Get children modules.
     *
     * @param $id
     * @return mixed
     */
    public function findModuleChildren($id)
    {
        return $this->model->where('parent_id', $id)->get()->toArray();
    }


    /**
     * Delete module record.
     *
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        return $this->model->where('id', $id)->delete();
    }
}