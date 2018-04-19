<template>
    <main>
        <div class="login-left">
            <h1>登录页</h1>
        </div>
        <div class="login-right">
            <header>
                <h1></h1>
            </header>
            <footer>
                <button @click="login">登录</button>
                <router-link :to="'register'">去注册</router-link>
            </footer>
        </div>    
    </main>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        login: function(){
            let user = {
                name:'xirong',
                age:'26'
            }
            sessionStorage.setItem('user',JSON.stringify(user))
            if(true){
                this.$router.push('/home')
            }
            this.$http.get(this.HTTP + '/query').then(
                response => {
                    console.log('成功')
                    //console.log(response)
                }, response => {
                    console.log('失败')
                    //console.log(response)
                }
            )
        },
        sss: function(val){
            alert(val)
        }
    },
    mounted(){


    }

}
</script>

<style scoped>
main{
    height: 100%;
}

</style>
