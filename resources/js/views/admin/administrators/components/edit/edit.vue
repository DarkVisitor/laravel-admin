<template>
    <div class="laradmin-main laradmin-form">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="{name: 'administrators'}">成员信息</BreadcrumbItem>
            <BreadcrumbItem>{{ activeStatus }}成员信息</BreadcrumbItem>
        </Breadcrumb>
        <div class="laradmin-form-element">
            <Form ref="moduleData" :model="adminsForm" :rules="ruleValidate" :label-width="100" style="width: 420px;"> 
                <FormItem label="账户" prop="name">
                    <Input class="modal-form-item" placeholder="请输入成员账户" v-model="adminsForm.name"></Input>
                </FormItem>
                <FormItem label="手机号码" prop="mobile">
                    <Input class="modal-form-item" placeholder="请输入成员手机号码" v-model="adminsForm.mobile"></Input>
                </FormItem>
                <FormItem label="电子邮箱" prop="email">
                    <Input class="modal-form-item" placeholder="请输入成员电子邮箱" v-model="adminsForm.email"></Input>
                </FormItem>
                <FormItem label="初始密码" prop="password">
                    <Input class="modal-form-item" placeholder="请输入账户初始密码" v-model="adminsForm.password"></Input>
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
export default {
    name: 'editAdministrators',
    data() {
        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            adminsForm: {
                id: '',
                name: '',
                mobile: '',
                email: '',
                password: ''
            },
            ruleValidate: {

            }
        }
    },
    computed: {

    },
    watch: {

    },
    methods: {
        handleInfoSave() {

        },
        handleInfoCancel() {
            
        }
    },
    mounted(){

    }
}
</script>
