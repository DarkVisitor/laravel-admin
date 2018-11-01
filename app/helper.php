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