<template>
    <div id="app">
        <!-- <div style="height: 200rem;backgrund: #ddd;">

        </div> -->
        <router-view></router-view>
        <BackTop :height="100"></BackTop>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {

        }
    },
    methods: {
            
    },
    created() {
        
    }
}
</script>

