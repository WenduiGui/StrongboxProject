<template>
  <div class="Loign">
    <LoignHeader></LoignHeader>
    <LoignBody></LoignBody>
    <LoignFooter></LoignFooter>
  </div>
</template>

<script>
import LoignHeader from "@/components/LoignHeader.vue";
import LoignBody from "@/components/LoignBody.vue";
import LoignFooter from "@/components/LoignFooter.vue";
export default {
  name: "Loign",
  components: {
    LoignHeader,
    LoignBody,
    LoignFooter,
  }
};
</script>

<style>

</style>