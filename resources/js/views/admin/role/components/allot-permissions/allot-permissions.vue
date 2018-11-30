<template>
    <Modal v-model="isModal" title="权限分配" width="80%">
        <auth-tree :data="roleAuth"></auth-tree>
        <div slot="footer">
            <Button type="text" size="large" >取消</Button>
            <Button type="primary" size="large" >保存</Button>
        </div>
    </Modal>
</template>
<script>
import AuthTree from '../auth-tree';
import RoleAPI from '@js/api/role.js';
export default {
    name: 'allot-permissions',
    components: {
        AuthTree
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        roleId: String
    },
    data() {
        return {
            isModal: false,
            roleAuth: []        
        }
    },
    computed: {
        /* roleAuth () {
            return this.$store.getters.getRoleAuth;
        }, */
        roleInfo () {
            return this.$store.state.role.roleInfo;
        }
    },
    watch: {
        value(newVal, oldVal) {
            this.isModal = newVal
        },
        isModal(newVal, oldVal) {
            this.$emit('input', newVal);
        },
        roleId(newVal) {
            let that = this;
            RoleAPI.getRoleAuth({id:newVal})
                .then(function(response){
                    that.roleAuth = response.data.authTree;
                    console.log(response.data.authTree);
                })
                .catch(function(){
                    
                });
        }
    },
    methods: {
        handleChangeModal (event) {
            console.log(event);
        }
    },
    created() {
        //console.log('initialize');
    }
}
</script>

