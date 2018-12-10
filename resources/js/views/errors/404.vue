<template>
    <div>
        <div class="content" style="text-align: center;padding-top: 120px;">
            <h1>404</h1>
            <p>页面不存在</p>
            <Button type="text" size="large" @click="backHome">返回首页</Button>
            <Button type="text" size="large" @click="backPrev">返回上一页</Button>
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
        backHome () {
            this.$router.replace({
                name: 'admin'
            })
        },
        backPrev () {
            this.$router.go(-1)
        }
    }
}
</script>

