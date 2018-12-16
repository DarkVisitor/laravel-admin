<?php
/**
 * Administrator Password Error Logging.
 * User: YingQuan-han
 * Date: 2018/12/16
 * Time: 22:56
 */

namespace App\Repositories;


use App\Models\AdminErrorPasswd;

class AdminPasswordRepository extends Repository
{
    public function model()
    {
        // TODO: Implement model() method.
        return AdminErrorPasswd::class;
    }


    /**
     * Find administrator login password error logging.
     *
     * @param $adminId
     * @return mixed
     */
    public function findAdminLoginPasswordLog($adminId)
    {
        return $this->model->where('admin_id', $adminId)->first();
    }


    /**
     * Update or create administrator login password error logging.
     *
     * @param $adminId
     * @return mixed
     */
    public function updateOrCreate($adminId)
    {
        $findLoginByLog = $this->findAdminLoginPasswordLog($adminId);
        if ($findLoginByLog){
            return $this->model->where('admin_id', $adminId)->increment('error_num');
        }else{
            info($adminId);
            $this->model->admin_id = $adminId;
            $this->model->error_num = 1;
            return $this->model->save();
        }
    }
}