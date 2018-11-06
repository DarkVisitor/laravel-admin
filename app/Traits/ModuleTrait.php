<?php
/**
 * Module permissions Trait.
 * User: DarkVisitor
 * Date: 2018/9/5
 * Time: 14:04
 */

namespace App\Traits;


trait ModuleTrait
{
    /**
     * 获取用户权限节点树
     * @param array $array
     * @param int $parentId
     * @param array $authority
     * @return array
     */
    public function authorityTree(array $array, $parentId = 0, array $authority = [])
    {
        $rows = array();
        foreach ($array as $key=>$item){
            if ($item["parent_id"] == $parentId){
                $item["isChecked"] = in_array($item["id"], $authority) ? 1 : 0;
                $item["children"] = $this->authorityTree($array, $item["id"], $authority);
                array_push($rows, $item);
                unset($array[$key]);
            }
        }

        return $rows;
    }


    /**
     * 解析权限树
     * @param array $array
     * @return array
     */
    public function analyzeAuthorityTree(array $array)
    {
        $rows = array();
        foreach ($array as $key=>$item){
            if ($item["isChecked"]){
                array_push($rows, $item["id"]);
            }

            if (isset($item["children"]) && is_array($item["children"]) && count($item["children"])){
                $rows = array_merge($rows, $this->analyzeAuthorityTree($item["children"]));
            }
        }

        return $rows;
    }


    /**
     * Sort the parent in front of the module.
     *
     * @param array $array
     * @param int $parentId
     * @return array
     */
    public function sortParentChild(array &$array, $parentId = 0)
    {
        static $iteration = array();
        $result = array();
        foreach ($array as $key=>$item){
            if ($item["parent_id"] == $parentId){
                $item["index"] = count($iteration);
                $iteration[] = $parentId;   //存在子孙代即将当前父id加入到迭代索引中，进行递归
                $result[] = $item;
                //将所有父子孙合并到一个一维数组中
                $result = array_merge($result, $this->sortParentChild($array, $item["id"]));
                unset($array[$key]);
                //递归结束后将当前父id从迭代索引中删除
                array_pop($iteration);
            }
        }

        return $result;
    }
}