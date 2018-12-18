<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class VerifyCode extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Verify code.
     *
     * @var
     */
    protected $code;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($code)
    {
        //
        $this->code = $code;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        info($this->code);
        return $this->subject('Laravel-Admin')
                    ->view('emails.verify_code')
                    ->with([
                        'content' => '您的验证码是 '. $this->code .' ,请勿泄露！'
                    ]);
    }
}
