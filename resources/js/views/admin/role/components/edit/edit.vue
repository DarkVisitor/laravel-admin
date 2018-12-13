<template>
    <div class="laradmin-main laradmin-form">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="{name: 'role'}">角色配置</BreadcrumbItem>
            <BreadcrumbItem>{{ activeStatus }}角色分组</BreadcrumbItem>
        </Breadcrumb>
        <div class="laradmin-form-element">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <Form ref="roleGroupForm" :model="roleGroupForm" :rules="ruleValidate" :label-width="100" style="width: 420px;"> 
                <FormItem label="分组名称" prop="title">
                    <Input class="modal-form-item" placeholder="请输入分组名称" v-model="roleGroupForm.title"></Input>
                </FormItem>
                <FormItem label="分组描述" prop="remarks">
                    <Input class="modal-form-item" type="textarea" :rows="4" placeholder="请输入分组描述" v-model="roleGroupForm.remarks"></Input>
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
import RoleAPI from '@js/api/role.js';
export default {
    name: 'editRole',
    data() {
        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            roleGroupForm: {
                id: '',
                title: '',
                remarks: ''
            },
            ruleValidate: {
                title: [
                    {required: true, message: '请输入分组名称', trigger: 'blur'}
                ]
            },
        }
    },
    computed: {
        roleInfo() {
            return this.$store.getters.getRoleInfo.data;
        }
    },
    watch: {
        roleInfo(curVal, oldVal) {
            this.spinShow = false;
            this.roleGroupForm = curVal;
        }
    },
    methods: {
        /** 
         * Admin group modal cancel event.
         */
        handleInfoCancel() {
            this.$refs['roleGroupForm'].resetFields();  // Reset from
        },
        /** 
         * Administrator group form submission event.
         */
        handleInfoSave() {
            this.$refs.roleGroupForm.validate((valid)=>{
                if (valid) {
                    let that = this;
                    that.loading = true;
                    RoleAPI.postRoleInfo(that.roleGroupForm)
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
        },
    },
    created() {
        // 编辑模式
        let params = this.$route.params;
        let query = this.$route.query;
        if ('id' in params){
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadRoleInfo', params.id);
        }else if ('id' in query){
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadRoleInfo', query.id);
        }
    },
    mounted() {

    }
}
</script>

