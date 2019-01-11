<?php
/**
 * Created by PhpStorm.
 * User: YingQuan-han
 * Date: 2019/1/11
 * Time: 13:52
 */

namespace App\Logging;

use App\Mail\LoggingNotice;
use Illuminate\Support\Facades\Mail;
use Monolog\Formatter\HtmlFormatter;
use Monolog\Handler\MailHandler;
use Monolog\Logger;

class LaravelMailerHandler extends MailHandler
{
    public function __construct($level = Logger::ERROR, $bubble = true)
    {
        parent::__construct($level, $bubble);
        $this->setFormatter(new HtmlFormatter());
    }

    protected function send($content, array $records)
    {
        //dd($records);
        Mail::to('472458908@qq.com')->send(new LoggingNotice($content));
    }
}