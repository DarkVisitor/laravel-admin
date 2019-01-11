<?php
/**
 * Created by PhpStorm.
 * User: YingQuan-han
 * Date: 2019/1/11
 * Time: 13:08
 */

namespace App\Logging;


use Monolog\Formatter\HtmlFormatter;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\SyslogUdpHandler;

class CustomizeFormatter
{
    /**
     * Customize the given logger instance.
     *
     * @param  \Illuminate\Log\Logger  $logger
     * @return void
     */
    public function __invoke($logger)
    {
        /*foreach ($logger->getHandlers() as $handler) {
            $handler->setFormatter(...);
        }*/
        $handlers = $logger->getHandlers();
        array_push($handlers, new LaravelMailerHandler());
        $logger->setHandlers($handlers);
    }
}