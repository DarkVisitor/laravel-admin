<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetPassword extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'account' => 'required',
            'verify_code' => 'required',
            'password' => 'required'
        ];
    }


    /**
     * Custom validation rule error message.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'account.required' => '请输入手机号或邮箱!',
            'verify_code.required' => '请输入短信验证码或邮箱验证码!',
            'password.required' => '请输入登录密码!'
        ];
    }
}
