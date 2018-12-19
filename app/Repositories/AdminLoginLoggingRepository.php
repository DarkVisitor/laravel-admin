<?php
/**
 * Administrator login logging repository.
 * User: YingQuan-han
 * Date: 2018/12/19
 * Time: 13:33
 */

namespace App\Repositories;


use App\Models\AdminLoginLog;

class AdminLoginLoggingRepository extends Repository
{
    public function model()
    {
        // TODO: Implement model() method.
        return AdminLoginLog::class;
    }


    /**
     * Create login logging.
     *
     * @param array $option
     * @return mixed
     */
    public function createLoginLogging(array $option)
    {
        foreach ($option as $key=>$value){
            $this->model->$key = $value;
        }

        return $this->model->save();
    }
}