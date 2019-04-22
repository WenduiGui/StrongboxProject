<template>
  <div class="Reg">
    <RegHeader></RegHeader>
    <RegBody></RegBody>
  </div>
</template>

<script>
import RegHeader from "./../components/RegHeader.vue";
import RegBody from "./../components/RegBody.vue";
export default {
  name: "Reg",
  components:{
      RegHeader,
      RegBody,
  }
};
</script>