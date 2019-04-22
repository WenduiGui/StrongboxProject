<template>
    <div id="Home_page">
        <PageHeader></PageHeader>
        <PageBanner></PageBanner>
        <PageContainer></PageContainer>
        <PageFooter></PageFooter>
    </div>
</template>
<script>
import PageHeader from "./../components/PageHeader.vue";
import PageBanner from "./../components/PageBanner.vue";
import PageContainer from "./../components/PageContainer.vue";
import PageFooter from "./../components/PageFooter.vue";
export default {
    name:"Home_page",
    components:{
        PageHeader,
        PageBanner,
        PageContainer,
        PageFooter
    }
}
</script>
