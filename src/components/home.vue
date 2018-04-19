<template>
    <div class="flex-box">
        <main-header v-on:fun="home"></main-header>
        <main>
            <nav>
                <span @click="$store.commit('switch_dialog')">0000</span>
                <img src="https://bpic.588ku.com/original_pic/18/03/23/63b2a086bee058ec2168d215334b38c5.jpg" alt="">
                <img src="https://bpic.588ku.com/original_pic/17/10/16/87662cb86ea2bfd61809543993add0b0.jpg" alt="">
                <div id="demo"></div>
            </nav>
            <router-view />
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
    mounted(){
        let imgs = document.getElementsByTagName('img');

        let imgs2 = new Image();
        imgs2.src = 'https://bpic.588ku.com/original_pic/18/04/11/d7f83f54e28ab70dc6c9b824df2bfd7e.jpg';
        
        //document.getElementById('demo').innerHTML=imgs[0];
        //document.getElementById('demo').innerHTML=imgs2;
        document.getElementById('demo').appendChild(imgs2);
        console.log(imgs[0])

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
