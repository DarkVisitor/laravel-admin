<template>
    <div class="laradmin-main laradmin-form">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="{name: 'role'}">角色配置</BreadcrumbItem>
            <BreadcrumbItem>权限分配</BreadcrumbItem>
        </Breadcrumb>
        <div class="laradmin-form-element">
            <Spin fix v-if="spinShow">
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
            </Spin>
            <auth-tree v-model="roleGroupAuthList"></auth-tree>
            
            <Button  style="margin-left: 8px" @click="handleCancel">取消</Button>
            <Button type="primary" @click="handleSave" :loading="loading">保存</Button>
        </div>
    </div>
</template>
<script>
import AuthTree from '../auth-tree';
import RoleAPI from '@js/api/role.js';
export default {
    name: 'permission',
    components: {
        AuthTree
    },
    data() {
        return {
            spinShow: false,
            loading: false,
            roleId: '',
            roleGroupAuthList: [],
        }
    },
    computed: {
        roleAuth() {
            return this.$store.getters.getRoleAuth;
        }
    },
    watch: {
        roleAuth(curVal, oldVal) {
            this.spinShow = false;
            this.roleGroupAuthList = curVal;
        }
    },
    methods: {
        /** 
         * Cancel assigning role group permissions.
         */
        handleCancel() {
            this.backMainPage();
        },
        /** 
         * Save role group permission information.
         */
        handleSave() {
            let that = this;
            that.loading = true;
            RoleAPI.postRoleAuth({id: this.roleId, authority: this.roleGroupAuthList})
                .then(function(response){
                    that.loading = false;
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                        that.backMainPage();
                    }                    
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.loading = false;
                });
        },
        /**
         * Back module main page.
         */
        backMainPage() {
            this.$router.push({
                name: 'role'
            });
        }
    },
    created() {
        let params = this.$route.params;
        let query = this.$route.query;
        if ('id' in params){
            this.spinShow = true;
            this.roleId = params.id;
            this.$store.dispatch('loadRoleAuth', {id: params.id});
        }else if ('id' in query){
            this.spinShow = true;
            this.roleId = params.id;
            this.$store.dispatch('loadRoleAuth', {id: query.id});
        }else{
            this.backMainPage();
        }
    },
    mounted() {

    }
}
</script>

