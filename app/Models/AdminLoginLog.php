<?php
/**
 * System administrator login log model.
 * User: YingQuan-han
 * Date: 2018/12/13
 * Time: 15:26
 */

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;

class AdminLoginLog extends Model
{
    protected $table = 'sys_admin_login_logs';
    protected $primaryKye = 'id';


    /**
     * Associated administrator model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function belongsToLoginLog()
    {
        return $this->belongsTo('App\Models\Admin', 'admin_id', 'id');
    }
}