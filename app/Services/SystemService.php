<?php
/**
 * System Common Business Class Library.
 * User: YingQuan-han
 * Date: 2018/12/18
 * Time: 22:35
 */

namespace App\Services;


use App\Mail\VerifyCode;
use App\Repositories\VerifyCodeRepository;
use Illuminate\Support\Facades\Mail;

class SystemService
{
    protected $verifyCodeRepository;

    public function __construct(VerifyCodeRepository $codeRepository)
    {
        $this->verifyCodeRepository = $codeRepository;
    }

    /**
     * Send verify code.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function sendVerifyCode($request)
    {
        $validated = $request->validated();
        if (strtolower($validated['verify_code']) !== $request->session()->pull('verify_code')){
            return response()->json(['code' => 54001, 'msg' => '验证码不正确']);
        }
        if (preg_match('/^1\d{10}$/', $validated['account'])){
            // Send SMS verification code.
            return response()->json(['code' => 20001, 'msg' => '暂未开启短信服务']);

        }elseif (preg_match('/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/', $validated['account'])){
            // Send email verification code.
            $code = rand_numeric(8);
            $boole = $this->verifyCodeRepository->createVerifyCode([
                'email' => $validated['account'],
                'code' => $code
            ]);
            if (!$boole){
                return response()->json(['code' => 54002, 'msg' => '验证码发送失败']);
            }
            // Send Email.
            Mail::to($validated['account'])->send(new VerifyCode($code));

            return response()->json(['code' => 0, 'msg' => '验证码已发送']);
        }else{
            return response()->json(['code' => 54001, 'msg' => '无效的手机号或邮箱']);
        }
    }
}