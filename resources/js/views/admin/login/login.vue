<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录LaravelAdmin
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="ios-person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="md-lock"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" :loading="loading" type="primary" long>
                                <span v-if="!loading">登录</span>
                                <span v-else>登录中</span>
                            </Button>
                        </FormItem>
                    </Form>
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
import {setToken} from '@js/libs/util.js';
export default {
    data () {
        return {
            loading: false,
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, whitespace: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, whitespace: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    let that = this;
                    that.loading = true;    //设置登录按钮提交状态
                    LoginAPI.postAccessToken({username:this.form.userName,password:this.form.password})
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
                            }else{
                                that.$Notice.success({
                                    title: '登录成功',
                                    desc: res.msg,
                                    duration: 3
                                });
                                setToken(res.data);
                                that.$store.dispatch('initMenuTree', {id:res.data.admins.id});  
                                //存储用户登录数据
                                //localStorage.setItem('admins', JSON.stringify(res.data.admins));
                                //跳转到后台首页
                                that.$router.push({
                                    name: 'admin'
                                });
                            }                            
                        })
                        .catch(function(e){
                            console.log(e);
                            that.$Message.info('系统繁忙，请稍后再试!');
                            that.loading = false;   //修改为可提交状态
                        });
                }
            });
        }
    }
};
</script>