<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    {{ title }}
                </p>
                <div class="form-con">
                    <Form v-show="isLoginOrReset" ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" clearable placeholder="用户名/手机号/邮箱"></Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" clearable placeholder="登录密码"></Input>
                        </FormItem>
                        <FormItem prop="verifyCode">
                            <Input v-model="form.verifyCode" clearable placeholder="验证码" style="width: 120px;"></Input>
                            <Avatar shape="square" style="width: 144px;" :src="verifyCodeImage" />
                            <Button type="text" @click="handleRefreshVerifyCode" class="refresh-verify-code"></Button>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleLoginSubmit" :loading="loading" type="primary" long>
                                <span v-if="!loading">登录</span>
                                <span v-else>登录中</span>
                            </Button>
                        </FormItem>
                    </Form>

                    <!-- Reset password -->
                    <Form v-show="!isLoginOrReset" ref="resetForm" :model="resetForm" :rules="resetRules">
                        <FormItem prop="account">
                            <Input v-model="resetForm.account" placeholder="手机号或邮箱"></Input>
                        </FormItem>
                        <FormItem prop="verifyCode" v-show="isCheck">
                            <Input v-model="resetForm.verifyCode" placeholder="验证码" style="width: 120px;"></Input>
                            <Avatar shape="square" style="width: 144px;" :src="verifyCodeImage" />
                            <Button type="text" @click="handleRefreshVerifyCode" class="refresh-verify-code"></Button>
                        </FormItem>
                        <FormItem prop="remoteVerifyCode">
                            <Input v-model="resetForm.remoteVerifyCode" placeholder="短信验证码/邮箱验证码" style="width: 150px;"></Input>
                            <Button v-if="isSend" type="default" disabled class="verify-code">{{ t }} 秒后可重发</Button>
                            <Button v-else type="default" @click="sendVerifyCode" class="verify-code">获取验证码</Button>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="resetForm.password" placeholder="登录密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleResetSubmit" :loading="loading" type="primary" long>
                                <span v-if="!loading">重置密码</span>
                                <span v-else>重置密码中</span>
                            </Button>
                        </FormItem>
                    </Form>
                    <div style="text-align: right;margin-bottom: 20px;">
                        <a style="user-select: none;" @click="switchLoginReset">{{ loginReset }}</a>
                    </div>
                    <p class="login-tip">
                        输入任意用户名和密码即可<br>
                        ©版权所有：xxx
                    </p>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import LoginAPI from '@js/api/login.js';
import SystemAPI from '@js/api/system.js';
import {setToken} from '@js/libs/util.js';
export default {
    data () {
        return {
            title: '欢迎登录LaravelAdmin',
            loading: false,
            loginReset: '忘记密码？',
            isLoginOrReset: true,
            t: 60,
            isSend: false,
            isCheck: false,
            form: {
                userName: '',
                password: '',
                verifyCode: ''
            },
            rules: {
                userName: [
                    { required: true, whitespace: true, message: '请输入用户名或手机号或邮箱', trigger: 'blur' }
                ],
                password: [
                    { required: true, whitespace: true, message: '请输入登录密码', trigger: 'blur' }
                ],
                verifyCode: [
                    { required: true, whitespace: true, message: '请输入验证码', trigger: 'blur' }
                ]
            },
            resetForm: {
                account: '',
                password: '',
                verifyCode: '',
                remoteVerifyCode: ''
            },
            resetRules: {
                account: [
                    { required: true, whitespace: true, message: '请输入手机号或邮箱', trigger: 'blur' },
                    { type: 'string', validator: (rule, value, callback) => {
                        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) && !/^1\d{10}$/.test(value)){
                            callback('无效的手机号或邮箱');
                        }else{
                            callback();
                        }
                    }, trigger: 'blur' }
                ],
                password: [
                    { required: true, whitespace: true, message: '请输入登录密码', trigger: 'blur' }
                ],
                verifyCode: [
                    { required: true, whitespace: true, message: '请输入验证码', trigger: 'blur' }
                ],
                remoteVerifyCode: [
                    { required: true, whitespace: true, message: '请输入短信验证码或邮箱验证码', trigger: 'blur' }
                ]
            }
        };
    },
    computed: {
        verifyCodeImage() {
            return this.$store.getters.getVerifyCode;
        }
    },
    watch: {
        'resetForm.account'(curVal) {
            this.isCheck = true;
        }
    },
    methods: {
        /**
         * Switch login or reset password.
         */
        switchLoginReset() {
            this.isLoginOrReset = !this.isLoginOrReset;
            this.loginReset = this.isLoginOrReset ? '忘记密码？' : '立即登录';
            this.title = this.isLoginOrReset ? '欢迎登录LaravelAdmin' : '重置密码';
            this.handleRefreshVerifyCode();
        },
        /**
         * Send verification code countdown timer.
         */
        countDown() {
            let that = this;
            setTimeout(() => {
                if (that.t){
                    that.countDown();
                    that.t = that.t - 1;
                }else{
                    that.isSend = false;
                    that.t = 60;
                }
            }, 1000);
        },
        /**
         * Send SMS or email verification code.
         */
        sendVerifyCode() {
            let that = this;
            that.$refs.resetForm.validateField('account', (valid) => {
                if (!valid){
                    that.$refs.resetForm.validateField('verifyCode', (error) => {
                        if (!error){
                            SystemAPI.sendVerifyCode({account: that.resetForm.account, verify_code: that.resetForm.verifyCode})
                                .then((res) => {
                                    if (res.data.code){
                                        that.$Notice.error({
                                            title: '系统提示',
                                            desc: res.data.msg,
                                            duration: 3
                                        });
                                        that.handleRefreshVerifyCode();     //刷新验证码
                                    }else{
                                        that.$Notice.success({
                                            title: '系统提示',
                                            desc: res.data.msg,
                                            duration: 3
                                        });
                                        that.isSend = true;
                                        that.countDown();
                                    }
                                })
                                .catch((err) => {
                                    that.$Message.info('系统繁忙，请稍后再试!');
                                    that.handleRefreshVerifyCode();     //刷新验证码
                                });
                        }
                    });
                }
            });
        },
        /**
         * Submit login data.
         */
        handleLoginSubmit() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    let that = this;
                    that.loading = true;    //设置登录按钮提交状态
                    console.log('debug');
                    LoginAPI.postAccessToken({username: this.form.userName,password: this.form.password,verify_code: this.form.verifyCode})
                        .then(function(response){
                            //console.log(response.data);
                            let res = response.data;
                            if(res.code){
                                that.$Notice.error({
                                    title: '登录失败',
                                    desc: res.msg,
                                    duration: 3
                                });
                                that.loading = false;   //修改为可提交状态
                                that.handleRefreshVerifyCode();     //刷新验证码
                            }else{
                                that.$Notice.success({
                                    title: '登录成功',
                                    desc: res.msg,
                                    duration: 3
                                });
                                setToken(res.data);
                                //移除所有本地存储信息
                                localStorage.clear();
                                that.loading = false;   //修改为可提交状态
                                //跳转到后台首页
                                /* that.$router.push({
                                    name: 'admin'
                                }); */
                                that.$router.push({
                                    path: '/admin/home'
                                });
                            }                            
                        })
                        .catch(function(e){
                            that.$Message.info('系统繁忙，请稍后再试!');
                            that.loading = false;   //修改为可提交状态
                            that.handleRefreshVerifyCode();     //刷新验证码
                        });
                }
            });
        },
        /**
         * Submit reset password data.
         */
        handleResetSubmit() {

        },
        /**
         * Refresh verify code.
         */
        handleRefreshVerifyCode() {
            this.$store.dispatch('loadVerifyCode', { t: Date.now() });
        }
    },
    created() {
        this.$store.dispatch('loadVerifyCode', { t: Date.now() });
    }
};
</script>
<style>
    .refresh-verify-code { 
        position: absolute; 
        width: 144px; 
        height: 32px;
        top: 1px; 
        right: -3px; 
        background: transparent!important;
    }
    .verify-code {
        width: 110px;
        margin-right: 0!important;
    }
    .switch-login-reset {
        /* position: absolute;
        top: 32px;
        right: 0px; */
        user-select: none;
        line-height: 24px;
    }
</style>

