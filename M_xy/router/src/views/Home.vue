<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeBody from "@/components/HomeBody.vue";
import HomeFooter from "@/components/HomeFooter.vue";
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeBody,
    HomeFooter
  }
};
</script>
