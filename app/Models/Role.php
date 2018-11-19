<?php
/**
 * System role model
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 13:48
 */

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Role extends Model
{
    protected $table = 'roles';
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;


    /**
     * Relation admin model
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function belongsToManyAdmin()
    {
        return $this->belongsToMany("App\Models\Admin", "role_admins", "role_id", "admin_id");
    }



    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $model->{$model->getKeyName()} = Uuid::uuid4()->getHex();
        });
    }
}