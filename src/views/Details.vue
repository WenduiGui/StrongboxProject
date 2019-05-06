<template>
    <div id="app">
        <AppHeader></AppHeader>
        <Appconterne></Appconterne>
        <AppFooter></AppFooter>
        <Appbeijing></Appbeijing>
        <Appbeijing2></Appbeijing2>
    </div>
</template>

<script>
import Appbeijing from '@/components/detail/Appbeijing'
import Appbeijing2 from '@/components/detail/Appbeijing2'
import AppHeader from '@/components/detail/AppHeader'
import Appconterne from '@/components/detail/Appconterne'
import AppFooter from '@/components/detail/AppFooter'
export default {
    name:"app",
    components:{
        Appbeijing,
        Appbeijing2,
        AppHeader,
        Appconterne,
        AppFooter,
    }
}
</script>