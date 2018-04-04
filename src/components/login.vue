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
        login:function(){
            let user = {
                name:'xirong',
                age:'26'
            }
            sessionStorage.setItem('suer',JSON.stringify(user))
        }
    }

}
</script>

<style scoped>
main{
    height: 100%;
}

</style>
