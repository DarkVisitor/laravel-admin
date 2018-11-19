<?php
/**
 * System role repository
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 13:52
 */

namespace App\Repositories;


use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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


    /**
     * Get pagination role list.
     *
     * @param int $limit
     * @return mixed
     */
    public function getAllByRole()
    {
        return $this->model
            ->with([
                'belongsToManyAdmin'
            ])
            ->orderBy('created_at', 'asc')
            ->get()
            ->toArray();
    }


    /**
     * Delete user group.
     *
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        DB::beginTransaction();
        try{
            $roles = $this->find($id);

            //Remove all users from user group
            $roles->belongsToMany()->detach();

            //Delete user group information
            $roles->delete();

            DB::commit();

            return true;
        }catch (\Exception $exception){
            DB::rollBack();
            Log::error('Failed to delete user group information. Cause of failure: '.$exception);
            return false;
        }
    }
}