<?php
/**
 * System check code model.
 * User: YingQuan-han
 * Date: 2018/12/13
 * Time: 15:31
 */

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;

class VerifyCode extends Model
{
    protected $table = 'sys_verify_codes';
    protected $primaryKey = 'id';


}