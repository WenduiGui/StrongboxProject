<template>
    <div class="recoed">
        <!-- <Bigbox></Bigbox> -->
        <RecoedHeader></RecoedHeader>
        <RecoedBody></RecoedBody>
        <RecoedFooter></RecoedFooter>
    </div>
</template>
<script>
// import Bigbox from "./Bigbox.vue";
import RecoedHeader from "@/components/RecoedHeader.vue"
import RecoedBody from "@/components/RecoedBody.vue"
import RecoedFooter from "@/components/RecoedFooter.vue"
export default {
    name:"recoed",
    components:{
        RecoedHeader,
        RecoedBody,
        RecoedFooter,
        // Bigbox,
    }
}
</script>

