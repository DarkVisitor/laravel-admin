<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ModulePost extends FormRequest
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
            'parent_id' => 'required|min:0|numeric',
            'title' => 'required'
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
            'parent_id.min' => '请选择上级菜单!',
            'title.required' => '请输入菜单名称!'
        ];
    }
}
