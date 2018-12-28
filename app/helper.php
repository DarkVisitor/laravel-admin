<?php
/**
 * Function library.
 * User: han
 * Date: 2018/9/11
 * Time: 14:35
 */


if (!function_exists('str_preg_chinese'))
{
    /**
     * Gets all Chinese characters in the string
     *
     * @param $str  string
     * @return string
     */
    function str_preg_chinese_char($str)
    {
        preg_match_all("#[\x{4e00}-\x{9fa5}]#u", $str, $match);

        return implode("", $match[0]);
    }
}


if (!function_exists('str_preg_all_blank'))
{
    function str_preg_all_blank($str)
    {
        $search = array(" ","　","\n","\r","\t");
        $replace = array("","","","","");

        return str_replace($search, $replace, $str);
    }
}


if (!function_exists('daily_start_datetime'))
{
    /**
     * Get the start date of the specified date,
     * returns the formatted date time or timestamp.
     *
     * @param null $date    date
     * @param bool $timestamp   timestamp || Y-m-d H:i:s
     * @return false|int|string
     */
    function daily_start_datetime($date = null, $timestamp = false)
    {
        if (is_null($date)){
            $date = date("Y-m-d H:i:s");
        }

        if ($timestamp){
            return strtotime($date." 00:00:01");
        }else{
            return date("Y-m-d H:i:s", strtotime($date." 00:00:01"));
        }
    }
}


if (!function_exists('daily_end_datetime'))
{
    /**
     * Get the end date of the specified date,
     * returns the formatted date time or timestamp.
     *
     * @param null $date    date
     * @param bool $timestamp   timestamp || Y-m-d H:i:s
     * @return false|int|string
     */
    function daily_end_datetime($date = null, $timestamp = false)
    {
        if (is_null($date)){
            $date = date("Y-m-d H:i:s");
        }

        if ($timestamp){
            return strtotime($date." 23:59:59");
        }else{
            return date("Y-m-d H:i:s", strtotime($date." 23:59:59"));
        }
    }
}


if (!function_exists('powerful_array_shift'))
{
    /**
     * Array_shift function multidimensional array version.
     *
     * array_shift() 多维数组加强版
     * @param $array
     * @return array
     */
    function powerful_array_shift($array)
    {
        if (!is_array($array)){
            return $array;
        }

        return powerful_array_shift(array_shift($array));
    }
}


if (!function_exists('rand_numeric'))
{
    /**
     * Generate a random number string.
     * Default 6-digit string returned.
     *
     * @param int $length
     * @return string
     * @throws Exception
     */
    function rand_numeric($length = 6)
    {
        if (!is_integer($length) || $length < 1){
            throw new Exception('rand_numeric() expect len parameter to be a positive integer');
        }
        $loop = (int)($length / 10);
        $randArr = range(0, 9);
        $output = [];
        if ($loop > 0){
            for ($i = 0;$i < $loop;$i++){
                shuffle($randArr);
                $output = array_merge($output, $randArr);
            }
            $surplus = $length - $loop * 10;
            if ($surplus){
                shuffle($randArr);
                $output = array_merge($output, array_slice($randArr, 0, $surplus));
            }
        }else{
            shuffle($randArr);
            $output = array_merge($output, array_slice($randArr, 0, $length));
        }

        return implode($output);
    }
}


if (!function_exists('rand_color'))
{
    /**
     * Random Generation of RBG Hexadecimal Colors.
     *
     * @param int $min
     * @param int $max
     * @return string
     */
    function rand_color($min = 0, $max = 255)
    {
        $red = str_pad(dechex(mt_rand($min, $max)), 2, '0', STR_PAD_LEFT );
        $green = str_pad(dechex(mt_rand($min, $max)), 2, '0', STR_PAD_LEFT );
        $blue = str_pad(dechex(mt_rand($min, $max)), 2, '0', STR_PAD_LEFT );
        $rgba = '#' . $red . $green . $blue;

        return $rgba;
    }
}