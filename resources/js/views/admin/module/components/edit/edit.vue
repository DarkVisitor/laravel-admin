<template>
    <div class="laradmin-main laradmin-form">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="{name: 'module'}">模块配置</BreadcrumbItem>
            <BreadcrumbItem>{{ activeStatus }}模块配置</BreadcrumbItem>
        </Breadcrumb>
        <div class="laradmin-form-element">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <Form ref="moduleData" :model="moduleData" :rules="ruleValidate" :label-width="100" style="width: 420px;"> 
                <FormItem label="上级菜单" prop="parent_id">
                    <Select class="modal-form-item" v-model="moduleData.parent_id">
                        <Option :value="0">顶级菜单</Option>
                        <Option v-for="item in menuModules" :value="item.id" :key="item.id" :style="{paddingLeft: selectPaddingLeft(item.index) + 'px'}">{{ item.title }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="菜单名称" prop="title">
                    <Input class="modal-form-item" placeholder="请输入菜单名称" v-model="moduleData.title"></Input>
                </FormItem>
                <FormItem label="Vue路由地址" prop="vue_router_path">
                    <Input class="modal-form-item" placeholder="请输入Vue路由地址" v-model="moduleData.vue_router_path"></Input>
                </FormItem>
                <FormItem label="Vue路由名称" prop="vue_router_name">
                    <Input class="modal-form-item" placeholder="请输入Vue路由名称" v-model="moduleData.vue_router_name"></Input>
                </FormItem>
                <FormItem label="Vue文件地址" prop="vue_file_path">
                    <Input class="modal-form-item" placeholder="请输入Vue文件地址" v-model="moduleData.vue_file_path"></Input>
                </FormItem>
                <FormItem label="Laravel路由" prop="laravel_router_path">
                    <Input class="modal-form-item" placeholder="请输入Laravel路由" v-model="moduleData.laravel_router_path"></Input>
                </FormItem>
                <FormItem label="导航菜单" prop="is_menu">
                    <i-switch v-model="moduleData.is_menu" size="large" :true-value="trueValue" :false-value="falseValue">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </FormItem>
                <FormItem label="icon" prop="icon">
                    <Input class="modal-form-item" placeholder="请输入icon" v-model="moduleData.icon"></Input>
                </FormItem>
                <FormItem label="排序" prop="sort">
                    <InputNumber class="modal-form-item" :min="1" v-model="moduleData.sort"></InputNumber>
                </FormItem>
                <FormItem label="状态" prop="status">
                    <i-switch v-model="moduleData.status" size="large" :true-value="trueValue" :false-value="falseValue">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </i-switch>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleInfoSave" :loading="loading">保存</Button>
                    <Button  style="margin-left: 8px" @click="handleInfoCancel">重置</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
import ModuleAPI from '@js/api/module.js';
export default {
    name: 'editModule',
    data() {
        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            trueValue: 1,
            falseValue: 0,
            moduleData: {
                id: '',
                parent_id: -1,
                title: '',
                vue_router_path: '',
                vue_router_name: '',
                vue_file_path: '',
                laravel_router_path: '',
                is_menu: 0,
                icon: '',
                sort: 1,
                status: 1
            },
            ruleValidate: {
                parent_id: [
                    {required: true, type: 'number', min: 0, message: '请选择上级菜单', trigger: 'change'}
                ],
                title: [
                    {required: true, message: '请输入菜单名称', trigger: 'blur'}
                ]
            },
        }
    },
    computed: {
        menuModules() {
            return this.$store.getters.getMenuModule.data;
        },
        moduleInfo() {
            return this.$store.getters.getModuleInfo.data;
        }
    },
    watch: {
        moduleInfo(curVal, oldVal) {
            this.moduleData = curVal;
            this.spinShow = false;
        }
    },
    methods: {
        /**
         * 设置顶级菜单 select 组件元素列表展示样式
         */
        selectPaddingLeft(child){
            return child * 16 + 16;
        },
        /** 
         * Module cancel event.
         */
        handleInfoCancel() {
            // reset from
            this.$refs['moduleData'].resetFields();
        },
        /** 
         * Save module info event.
         */
        handleInfoSave() {
            this.$refs['moduleData'].validate((valid)=>{
                if (valid) {
                    let that = this;
                    that.loading = true;
                    ModuleAPI.saveFromModule(this.moduleData)
                        .then(function(response){
                            that.loading = false;
                            if(response.data.code){
                                that.$Message.error(response.data.msg);
                            }else{
                                that.$Message.success(response.data.msg);
                                that.$router.go(-1);
                            }                            
                        })
                        .catch(function(){
                            that.$Message.info('系统繁忙，请稍后再试!');
                            that.loading = false;
                        });
                }
            });
        }
    },
    created() {
        // 编辑模式
        let params = this.$route.params;
        let query = this.$route.query;
        if ('id' in params){
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadModuleInfo', params.id);
        }else if ('id' in query){
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadModuleInfo', query.id);
        }
    },
    mounted() {
        // Initialize parent menu list.
        this.$store.dispatch('loadIsMenuModule');
    }
}
</script>
