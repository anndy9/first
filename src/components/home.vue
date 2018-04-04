<template>
    <div>
        <header>后台管理系统</header>
        <main>
            <nav>
                0000
            </nav>
            <router-view/>
        </main>
    </div>
</template>

<script>
export default {
   watch: {
    '$route' (to, from) {
        console.log('变化了')
    }
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
