<template>
  <div class="box">
    <!-- bigbox -->
    <!-- <Bigbox></Bigbox> -->
    <BoxHeader></BoxHeader>
    <BoxBody></BoxBody>
    <BoxFooter></BoxFooter>
  </div>
</template>

<script>
// import Bigbox from "./Bigbox.vue";
import BoxHeader from "@/components/BoxHeader.vue";
import BoxBody from "@/components/BoxBody.vue";
import BoxFooter from "@/components/BoxFooter.vue";
export default {
  name: "box",
  components: {
    BoxHeader,
    BoxBody,
    BoxFooter,
    // Bigbox,
  }
};
</script>

<style>

</style>
