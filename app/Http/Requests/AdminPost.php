<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminPost extends FormRequest
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
            'name' => 'required',
            'email' => 'required|email'
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
            'name.required' => '请输入账户!',
            'email.required' => '请输入电子邮箱!',
            'email.email' => '无效的电子邮箱',
        ];
    }
}
