<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class LoggingNotice extends Mailable
{
    use Queueable, SerializesModels;

    protected $content;

    /**
     * System logging message instance.
     *
     * @return void
     */
    public function __construct($content)
    {
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('System Error Notification')
            ->view('emails.logging_notice')
            ->with([
                'content' => $this->content
            ]);
    }
}
