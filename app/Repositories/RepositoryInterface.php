<?php
/**
 * Repository mode interface
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 14:16
 */

namespace App\Repositories;


interface RepositoryInterface
{
    public function findBy($id);
}