<?php
/**
 * 系统文件操作类
 * User: DarkVisitor
 * Date: 2018/9/18
 * Time: 14:58
 */

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;


class FilesController extends Controller
{
    public function __construct()
    {

    }


    public function uploadPictureFiles(Request $request)
    {
        if ($request->hasFile("picture") && $request->file("picture")->isValid()){
            $path = $request->picture->store("images", "public");

            return response()->json(["code" => 0, "msg" => "success", "url" => Storage::url($path)]);
        }else{
            return response()->json(["code" => 10004, "msg" => "Invalid upload file"]);
        }
    }


    public function compressFiles($files, $path)
    {
        //定义上传路径
        if (is_null($path)){
            $path = storage_path("app/public/images/");
        }else{
            $path = storage_path("app/public/".$path."/");
        }

        //获取系统原始umask
        $old = umask(0);
        //生成上传目录
        if (!is_dir($path)){
            mkdir($path, 0777, true);
        }
        umask($old);

        //上传文件
        if (is_array($_FILES[$files]["name"])){
            //多文件上传
            $pathArr = [];
            foreach ($_FILES[$files]["tmp_name"] as $key=>$value){
                if (empty($value)){
                    $pathArr[$key] = '';
                    continue;
                }
                //生成保存路劲和文件名
                $filename = $path . date("YmdHis") . "_" . md5(time().rand(1000, 9999)).".jpg";

                //获取图片资源
                $imgstream = file_get_contents($value);
                $resources = imagecreatefromstring($imgstream);
                if (imagejpeg($resources, $filename, 80)){
                    $pathArr[$key] = trim(str_replace(storage_path("app/public/"), "", $filename));
                }
            }

            return $pathArr;
        }else{
            //单文件上传
            //生成保存路劲和文件名
            $filename = $path . date("YmdHis") . "_" . md5(time().rand(1000, 9999)).".jpg";

            //获取图片资源
            $resources = imagecreatefromstring(file_get_contents($_FILES[$files]["tmp_name"]));
            if (imagejpeg($resources, $filename, 80)){
                return trim(str_replace(storage_path("app/public/"), "", $filename));
            }else{
                return false;
            }
        }

    }
}