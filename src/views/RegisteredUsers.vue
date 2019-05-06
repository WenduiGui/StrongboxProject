<template>
    <div id="app">      
        <RegHeader></RegHeader>
        <RegBody></RegBody>
        <router-link to="/"></router-link>
    </div>
</template>

<script>
import RegHeader from '../components/Registered/RegHeader.vue'
import RegBody from '../components/Registered/RegBody.vue'
export default {
    name: 'app',
    components:{
        RegHeader,RegBody,
    }
}
</script>