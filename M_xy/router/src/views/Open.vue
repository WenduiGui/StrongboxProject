<template>
  <div class="open">
    <!-- <Bigbox></Bigbox> -->
    <OpenHeader></OpenHeader>
    <OpenBody></OpenBody>
    <OpenFooter></OpenFooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import Bigbox from "./Bigbox.vue";
import OpenHeader from '@/components/OpenHeader.vue'
import OpenBody from "@/components/OpenBody.vue"
import OpenFooter from "@/components/OpenFooter.vue"
export default {
  name: 'open',
  components: {
    OpenHeader,
    OpenBody,
    OpenFooter,
    // Bigbox,
  }
}
</script>
<style>

</style>

