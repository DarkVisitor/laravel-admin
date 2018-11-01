<?php
/**
 * Created by PhpStorm.
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 10:06
 */

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'id';

    /**
     * Using multiple fields to issue tokens
     * @param $username
     * @return mixed
     */
    public static function findForPassport($username)
    {
        return User::orWhere('email', $username)->orWhere('name', $username)->first();
    }
}