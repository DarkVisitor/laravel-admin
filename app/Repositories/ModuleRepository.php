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
            ->orderBy("sort", "desc")
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

}