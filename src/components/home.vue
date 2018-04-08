<template>
    <div class="flex-box">
        <main-header v-on:fun="home"></main-header>
        <main>
            <nav>
                0000
            </nav>
            <router-view/>
        </main>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Vue from 'vue'
import mainHeader from './common/header.vue'
import mainFooter from './common/footer.vue'
export default {
    components: {
        mainHeader,
        mainFooter
    },
    data(){
        return{
            message: '我是home中传递过来的数据'
        }
    },
    methods:{
        home: function(massage){
            console.log('我是home中的方法')
            console.log(massage)
        }
    },
    watch: {
        '$route' (to, from) {
            console.log('变化了')
        }
    }
}
</script>

<style scoped>
.flex-box{display: flex;flex-direction: column;height: 100%}
.flex-box > main{flex: 1;background: cadetblue}
</style>
