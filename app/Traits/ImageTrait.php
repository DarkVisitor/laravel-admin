<?php
/**
 * Class of Image Operating Characteristics.
 * User: YingQuan-han
 * Date: 2018/12/28
 * Time: 11:58
 */

namespace App\Traits;


use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

trait ImageTrait
{
    /**
     * Generate avatars based on user names.
     *
     * @param $string
     * @param int $width
     * @param int $height
     * @return string
     */
    public function createAvatarImage($string, $width = 180, $height = 180)
    {
        if (!Storage::exists('public/images/avatars')){
            Storage::makeDirectory('public/images/avatars');
        }
        $path = storage_path('app/public/images/avatars/'. md5($string) .'.png');
        $firstChar = mb_substr($string, 0, 1, 'UTF-8');
        $img = Image::canvas($width, $height, rand_color());
        $img->text($firstChar, $width/2, $height/2, function ($font){
            $font->file(public_path('fonts/MicrosoftVistaBlackBody.ttf'));
            $font->size(100);
            $font->color('#fff');
            $font->align('center');
            $font->valign('middle');
        });
        $img->save($path);

        return strstr($path, 'public');
    }
}