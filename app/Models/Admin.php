<?php
/**
 * Administrator user model
 * User: YingQuan-han
 * Date: 2018/10/11
 * Time: 16:23
 */

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasApiToKens, Notifiable;

    protected $table = 'sys_admins';
    protected $primaryKey = 'id';

    /**
     * Using multiple fields to issue tokens
     * @param $username
     * @return mixed
     */
    public static function findForPassport($username)
    {
        return Admin::orWhere('email', $username)->orWhere('name', $username)->orWhere('mobile', $username)->first();
    }


    /**
     * Accessor to field cur_login_ip
     *
     * @param $value
     * @return string
     */
    public function getCurLoginIpAttribute($value)
    {
        return long2ip($value);
    }


    /**
     * Accessor to field last_login_ip
     *
     * @param $value
     * @return string
     */
    public function getLastLoginIpAttribute($value)
    {
        return long2ip($value);
    }


    /**
     * Mutator to field cur_login_ip
     *
     * @param $value
     */
    public function setCurLoginIpAttribute($value)
    {
        $this->attributes['cur_login_ip'] = ip2long($value);
    }


    /**
     * Mutator to field last_login_ip
     *
     * @param $value
     */
    public function setLastLoginIpAttribute($value)
    {
        $this->attributes['last_login_ip'] = ip2long($value);
    }


    /**
     * Relation role model
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function belongsToManyRole()
    {
        return $this->belongsToMany('App\Models\Role', 'role_admins');
    }


    /**
     * Relation administrator login error password logging model.
     *
     * @return mixed
     */
    public function hasOnePassword()
    {
        return $this->hasOne('App\Models\AdminErrorPasswd', 'admin_id', $this->primaryKey);
    }
}