<template>
    <div class="laradmin-main">
        <Card style="width:320px">
            <p slot="title">欢迎您</p>
            <div style="text-align:center">
                <Avatar class="admin-avatar" icon="ios-person" size="large" :src="admins.avatar"/>
                <h3>{{ admins.name }}</h3>
                <p>最近一次登录时间：{{ admins.last_login_datetime }}</p>
                <!-- <p>  最后登录IP：{{ admins.last_login_ip }}</p> -->
            </div>
        </Card>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    computed: {
        admins() {
            return this.$store.getters.getAdminInfo;
        }
    },
    watch: {

    },
    methods: {

    },
    created() {
        
    }
}
</script>
<style>
    .admin-avatar {
        width: 100px;
        height: 100px;
        line-height: 100px;
        border-radius: 50px;
    }
</style>

