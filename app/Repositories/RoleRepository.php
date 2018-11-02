<?php
/**
 * System role repository
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 13:52
 */

namespace App\Repositories;


use App\Models\Role;

class RoleRepository extends Repository
{
    public function model()
    {
        // TODO: Implement model() method.
        return Role::class;
    }


    /**
     * Find the role information of the administrator.
     *
     * @param $id
     * @return mixed
     */
    public function findAdminByRole($id)
    {
        return $this->model
            ->with([
                'belongsToManyAdmin' => function($query) use ($id){
                    $query->where('id', $id);
                }
            ])
            ->get();
    }
}