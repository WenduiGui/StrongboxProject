<template>
    <div id="app">
        <AppHeader></AppHeader>
        <AppContianer></AppContianer>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppHeader from '@/components/my/AppHeader'
import AppContianer from '@/components/my/AppContianer'
import AppFooter from '@/components/my/AppFooter'
export default {
    name:"app",
    components:{
        AppHeader,
        AppContianer,
        AppFooter
    }
}
</script>