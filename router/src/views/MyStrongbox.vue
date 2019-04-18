<template>
    <div id="app">
        <AppHeader></AppHeader>
        <AppContianer></AppContianer>
    </div>
</template>

<script>
import AppHeader from '@/components/my/AppHeader'
import AppContianer from '@/components/my/AppContianer'
export default {
    name:"app",
    components:{
        AppHeader,
        AppContianer
    }
}
</script>