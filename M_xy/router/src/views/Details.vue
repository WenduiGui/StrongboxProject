<template>
    <div id="detalis">
        <DetailsHeader></DetailsHeader>
        <DetailsBody></DetailsBody>
    </div>
</template>
<script>
import DetailsHeader from "@/components/DetailsHeader.vue"
import DetailsBody from "@/components/DetailsBody.vue"
export default {
    name:"detalis",
    components:{
        DetailsHeader,
        DetailsBody
    }
}
</script>
