<template>
    <div id="app">      
        <LoginHeader></LoginHeader>
        <LoginBody></LoginBody>
        <LoginFooter></LoginFooter>
        <router-link to="/"></router-link>
    </div>
</template>

<script>
import LoginHeader from '@/components/login/LoginHeader.vue'
import LoginBody from '@/components/login/LoginBody.vue'
import LoginFooter from '@/components/login/LoginFooter.vue'
export default {
    name: 'app',
    components:{
        LoginHeader,LoginBody,LoginFooter,
    }
}
</script>