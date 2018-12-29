<template>
    <div class="laradmin-main laradmin-form">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="{name: 'administrators'}">成员信息</BreadcrumbItem>
            <BreadcrumbItem>{{ activeStatus }}成员信息</BreadcrumbItem>
        </Breadcrumb>
        <div class="laradmin-form-element">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <Form ref="adminsForm" :model="adminsForm" :rules="ruleValidate" :label-width="100" style="width: 420px;"> 
                <FormItem label="账户" prop="name">
                    <Input class="modal-form-item" :clearable="!isDisabled" :disabled="isDisabled" placeholder="请输入成员账户" v-model="adminsForm.name"></Input>
                </FormItem>
                <FormItem label="手机号码" prop="mobile">
                    <Input class="modal-form-item" clearable placeholder="请输入成员手机号码" v-model="adminsForm.mobile"></Input>
                </FormItem>
                <FormItem label="电子邮箱" prop="email">
                    <Input class="modal-form-item" clearable placeholder="请输入成员电子邮箱" v-model="adminsForm.email"></Input>
                </FormItem>
                <FormItem :label="labelPassword" prop="password" :required="isRequired">
                    <Input class="modal-form-item" :type="inputType" :icon="lookPassword" placeholder="请输入账户密码" v-model="adminsForm.password" @on-click="toggleInputType"></Input>
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
import AdminAPI from '@js/api/admin.js';
export default {
    name: 'editAdministrators',
    data() {
        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            isDisabled: false,
            labelPassword: '初始密码',
            isRequired: true,
            inputType: 'password',
            lookPassword: 'ios-eye',
            adminsForm: {
                id: '',
                name: '',
                mobile: '',
                email: '',
                password: ''
            },
            ruleValidate: {
                name: [
                    {required: true, message: '请输入登录账号', trigger: 'blur'}
                ],
                mobile: [
                    {type: 'string', validator: (rule, value, callback) => {
                        if (value != '' && !/^1\d{10}$/.test(value)){
                            callback('无效的手机号码');
                        }else{
                            callback();
                        }
                    }, trigger: 'change'}
                ],
                email: [
                    {required: true, message: '请输入电子邮箱', trigger: 'blur'},
                    {type: 'string', validator: (rule, value, callback) => {
                        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
                            callback('无效的电子邮箱');
                        }else{
                            callback();
                        }
                    }}
                ],
                password: [
                    {type: 'string', validator: (rule, value, callback) => {
                        if (this.isRequired && value == ''){
                            callback('请输入初始密码');
                        }else{
                            callback();
                        }
                    }, trigger: 'blur'}
                ]
            }
        }
    },
    computed: {
        adminInfo() {
            this.spinShow = false;
            return this.$store.getters.getAdminFirst;
        }
    },
    watch: {
        adminInfo(curVal, oldVal) {
            this.adminsForm = curVal;
        }
    },
    methods: {
        handleInfoSave() {
            let that = this;
            that.$refs['adminsForm'].validate((valid) => {
                if (valid){
                    that.loading = true;
                    that.postAdminInfo(that.adminsForm)
                        .then((res) => {
                            that.loading = false;
                            if (res.data.code){
                                that.$Message.error(res.data.msg);
                            }else{
                                that.$Message.success(res.data.msg);
                                that.$router.go(-1);
                            }
                        })
                        .catch((err) => {
                            that.$Message.info('系统繁忙，请稍后再试!');
                            that.loading = false;
                        });
                }
            });
        },
        handleInfoCancel() {
            this.$refs['adminsForm'].resetFields();
        },
        /**
         * Toggle account password look or not look.
         */
        toggleInputType() {
            if (this.inputType == 'password'){
                this.inputType = 'text';
                this.lookPassword = 'ios-eye-off';
            }else {
                this.inputType = 'password';
                this.lookPassword = 'ios-eye';
            }
        },
        postAdminInfo(data) {
            if (data.id == ''){
                return AdminAPI.createAdminInfo(data);
            }else{
                return AdminAPI.editAdminInfo(data);
            }
        }
    },
    created() {
        // 编辑模式
        let params = this.$route.params;
        let query = this.$route.query;
        if ('id' in params || 'id' in query){
            this.activeStatus = '编辑';
            this.labelPassword = '重置密码';
            this.isRequired = false;
            this.spinShow = true;
            this.isDisabled = true;
            if ('id' in params){
                this.$store.dispatch('findAdminList', {id: params.id});
            }else if ('id' in query){
                this.$store.dispatch('findAdminList', {id: query.id});
            }
        }
    },
    mounted(){

    }
}
</script>
