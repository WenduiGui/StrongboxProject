<template>
    <div id="app">      
        <AppHeader></AppHeader>
        <AppContainer></AppContainer>
        <Subrouter></Subrouter>
    </div>
</template>

<script scoped>
 import AppHeader from '../components/status/AppHeader.vue'
 import AppContainer from '../components/status/AppContainer.vue'
 import Subrouter from '@/Subrouter.vue'
 export default {
     name:'app',
     components:{
         AppHeader,AppContainer,
         Subrouter
     }
 }
</script>