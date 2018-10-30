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

    protected $table = 'admins';
    protected $primaryKey = 'id';

    /**
     * Using multiple fields to issue tokens
     * @param $username
     * @return mixed
     */
    public static function findForPassport($username)
    {
        return Admin::orWhere('email', $username)->orWhere('name', $username)->first();
    }
}