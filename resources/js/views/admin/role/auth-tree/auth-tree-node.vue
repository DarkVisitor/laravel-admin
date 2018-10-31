<template>
    
        <li :class="isChildren">
            <Checkbox v-model="author.isChecked" @on-change="onChangeAuth" :true-value="1" :false-value="0" :indeterminate="author.indeterminate">
                <span>{{model.title}}</span>
            </Checkbox>
            <ul class="auth-tree-node" v-if="isFolder">
                <auth-tree-node v-for="(model, key, index) in author.children" :index="key" :key="index" :model="model"></auth-tree-node>
            </ul>
        </li>
    
</template>
<style>
    
</style>
<script>
    import AuthTreeNode from './auth-tree-node.vue';
    import Emitter from 'iview/src/mixins/emitter.js';

    export default {
        name: 'auth-tree-node',
        mixins: [Emitter],
        components: {AuthTreeNode},
        props: ['model'],
        data() {
            return {
                author: this.model
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children && this.model.children.length;
            },
            isChildren: function() {
                return (!this.model.children || !this.model.children.length) ? 'active-children' : '';
            }
        },
        methods: {
            onChangeAuth: function(isCheck){
                //Vue2.x已移除dispatch方法，该方法使用的是iview-UI自定义的方法，用于事件分发，源码：iview/src/mixins/emitter.js
                this.dispatch('auth-tree', 'on-check', {checked:isCheck, nodeKey:this.model.nodeKey});
            }
        }
    }
</script>

