<template>
    <div class="recoed">
        <RegHeader></RegHeader>
        <RedBody></RedBody>
    </div>
</template>
<script>
import RegHeader from "@/components/RegHeader.vue"
import RedBody from "@/components/RedBody.vue"
export default {
    name:"recoed",
    components:{
        RegHeader,
        RedBody,
    }
}
</script>