<template>
    <div>
        <div class="content-header">
            <div class="header-action">
                <Button to="/admin/system/basic/role" size="small" icon="arrow-return-left">返回</Button>
            </div>
        </div>
        <div>
            <auth-tree :data="roleAuth"></auth-tree>
        </div>
        <Button type="info" @click="fromSubmit">保存</Button>
    </div>
</template>
<style>
    
</style>

<script>
import RoleAPI from '@/api/role.js';
import AuthTree from './auth-tree';
export default {
    components: {
        AuthTree
    },
    data () {
        return {
            auths: []
        }
    },
    computed: {
        roleAuth () {
            return this.$store.getters.getRoleAuth;
        },
        roleInfo () {
            return this.$store.state.role.roleInfo;
        }
    },
    watch: {
        
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        fromSubmit: function(){
            let data = {
                id: this.roleInfo.id,
                authority: this.roleAuth
            }, that = this;
            
            RoleAPI.postRoleAuth(data)
                .then(function(response){
                    if(response.data.code){
                        that.$Message.error(response.data.msg);
                    }else{
                        that.$Message.success(response.data.msg);
                    }
                })
                .catch(function(){
                    that.$Message.info('系统繁忙，请稍后再试!');
                });
        }
    },
    created () {
        this.$store.dispatch('loadRoleAuth', this.$route.params);
    }
}
</script>
