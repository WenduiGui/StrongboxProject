<template>
    <div id="app">
        <AppHeader></AppHeader>
        <AppTitle></AppTitle>
        <AppContianer></AppContianer>
        <Subrouter></Subrouter>
    </div>
</template>
<script>
import AppHeader from '@/components/user/AppHeader'
import AppTitle from '@/components/user/AppTitle'
import AppContianer from '@/components/user/AppContianer'
import Subrouter from '@/Subrouter'
export default {
    name:"app",
    components:{
        AppHeader,
        AppTitle,
        AppContianer,
        Subrouter
    }
}
</script>
