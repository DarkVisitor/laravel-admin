<template>
    <div class="error-page">
        <div class="container">
            <img src="/svg/error-500.svg">
            <div class="text-con">
                <h4>404</h4>
                <h5>Oh~~鬼知道服务器经历了什么~</h5>
            </div>
            <div class="back-btn-group">
                <Button type="text" size="large" @click="backHome">返回首页</Button>
                <Button type="text" size="large" @click="backPrev">返回上一页</Button>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        backHome() {
            this.$router.replace({
                name: 'admin'
            });
        },
        backPrev() {
            this.$router.go(-1);
        }
    }
}
</script>

