/**
 * Laravel - Admin system permission plugin.
 */

import store from '../store'; 

const permission = {
    install: function(Vue, options) {
        // 全局资源 - 自定义指令 v-has-permit，没权限操作将删除DOM元素
        Vue.directive('has-permit', {
            bind(el, binding, vnode, oldVnode){
                /* console.log(binding); */
                if (!Vue.prototype.hasPermit(binding.arg)){
                    el.parentNode.removeChild(el);
                }
            }
        });

        // 全局实例 - 自定义函数 hasPermit
        Vue.prototype.hasPermit = function(arg) {
            let smalls = store.state.admin.smallsPermit;
            /* console.log(store.state.admin.smallsPermit); */
            for (let i=0; i < smalls.length; i++){
                if (smalls[i] === arg){
                    return true;
                }
            }
            return false;
        }
    }
}

export default permission;