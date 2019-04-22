<template>
  <div class="forget">
    <ForgetHeader></ForgetHeader>
    <ForgetBody></ForgetBody>
  </div>
</template>

<script>
import ForgetHeader from "./../components/ForgetHeader.vue";
import ForgetBody from "./../components/ForgetBody.vue";
export default {
  name: "forget",
  components:{
      ForgetHeader,
      ForgetBody
  }
};
</script>
