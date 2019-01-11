<?php
/**
 * Created by PhpStorm.
 * User: YingQuan-han
 * Date: 2019/1/11
 * Time: 12:53
 */

namespace App\Logging;

use Monolog\Logger;

class CreateCustomLogger
{
    public function __invoke(array $config)
    {
        // TODO: Implement __invoke() method.
        dd($config);
        return new Logger($config);
    }
}