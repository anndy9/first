<template>
<div>
    <header>
        后台管理系统，登录人：{{name}}<a @click="userOut" >退出</a>
        <button @click="$store.commit('footer_change','xirong')">控制footer改变</button>
    </header>
</div>
</template>

<script>
import bus from './bus.vue'
export default {
    data(){
        return{
            name:'',
            massage: '我是header中的信息'
        }
    },
    props:{
        // name:{
        //     type:String,
        //     default:'小明'
        // }
    },
    methods:{
        userOut:function(){
            sessionStorage.removeItem('user')
            this.$router.push('/login')
            //this.$emit('fun',this.massage)
        }
    },
    mounted(){
        let userMassage = JSON.parse(sessionStorage.getItem('user'))
        this.name = userMassage.name
        bus.$on('selected', function (id) {
            console.log('我被触发了2')
            console.log(id)
        })
    }

}
</script>

<style scoped>
header{
    background: #ccc;
    padding: 10px;
    text-align: center;
    font-size: 24px
}
</style>
