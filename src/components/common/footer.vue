<template>
<div>
    <footer>
        <button @click="ddd">测试中央总线</button>
        {{sss}}{{$store.state.footer.name}}
    </footer>
</div>  
</template>

<script>
import bus from './bus.vue'
export default {
    methods:{
        selected: function(){
            console.log('我是页脚中的方法')
        },
        ddd: () =>{
            bus.$emit('selected','这是我传递过来的数据')
        }
    },
    computed:{
        sss:function(){
            
            if(this.$store.state.footer.show >= 5){
                return '已经是第五次了'
            }

            return this.$store.state.footer.show

             
        }
    }
}
</script>

<style scoped>
footer{
    background: #ccc;
    padding: 10px;
    font-size: 24px;
    text-align: center
}
</style>
