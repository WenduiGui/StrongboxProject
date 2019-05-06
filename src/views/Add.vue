<template>
    <div id="app">      
        <AppHeader></AppHeader>
        <AppFooter></AppFooter>
    </div>
</template>

<script scoped>
 import AppHeader from '@/components/add/AppHeader.vue'
 import AppFooter from '@/components/add/AppFooter.vue'
 export default {
     name:'app',
     components:{
         AppHeader,AppFooter
     }
 }
</script>