<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VerifyCode extends FormRequest
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
            'verify_code' => 'required'
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
            'account.required' => '请输入手机号/邮箱!',
            'verify_code.required' => '请输入验证码!',
        ];
    }
}
