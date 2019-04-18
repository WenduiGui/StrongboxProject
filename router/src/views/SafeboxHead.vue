<template>
    <div id="app">      
        <AppHeader></AppHeader>
        <AppBanner></AppBanner>
        <AppContainer></AppContainer>
        <AppFooter></AppFooter>
    </div>
        
</template>

<script>
import AppHeader from '../components/head/AppHeader.vue'
import AppBanner from '../components/head/AppBanner.vue'
import AppContainer from '../components/head/AppContainer.vue'
import AppFooter from '../components/head/AppFooter.vue'

export default {
    name:'app',
    components:{
        AppHeader,AppContainer,AppFooter,AppBanner,
    }
}
</script>