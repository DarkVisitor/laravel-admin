<?php
/**
 * System administrator check password error count record model.
 * User: YingQuan-han
 * Date: 2018/12/13
 * Time: 15:20
 */

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;

class AdminErrorPasswd extends Model
{
    protected $table = 'sys_admin_error_passwd_logs';
    protected $primaryKey = 'id';


    /**
     * Associated administrator model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function belongsToErrPasswd()
    {
        return $this->belongsTo('App\Models\Admin', 'admin_id', 'id');
    }
}