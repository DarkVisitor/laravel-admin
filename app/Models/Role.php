<?php
/**
 * System role model
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 13:48
 */

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $primaryKey = 'id';


    /**
     * Relation admin model
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function belongsToManyAdmin()
    {
        return $this->belongsToMany("App\Models\Admin", "role_admins", "role_id", "admin_id");
    }
}