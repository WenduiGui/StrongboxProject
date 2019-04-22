<template>  
    <div class="user">
        <!-- <Bigbox></Bigbox> -->
        <UserHeader></UserHeader>
        <UserTitle></UserTitle>
        <UserBody></UserBody>
        <UserFooter></UserFooter>
    </div>
</template>
<script>
// import Bigbox from "./Bigbox.vue";
import UserHeader from "@/components/UserHeader.vue"
import UserTitle from "@/components/UserTitle.vue"
import UserBody from "@/components/UserBody.vue"
import UserFooter from "@/components/UserFooter.vue"
export default {
    name:"user",
    components:{
        UserHeader,
        UserTitle,
        UserBody,
        UserFooter,
        // Bigbox
    }

}
</script>

