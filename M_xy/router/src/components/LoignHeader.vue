<template>
    <div id="LoignHeader">
        <router-link to="/Home_page">
        <img :src="url" alt="" class="back">
        </router-link>
    </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
    name:"LoignHeader",
    data(){
        return{
            url:require("../assets/back.png")
        }
    }
}
</script>
<style>
#LoignHeader{
    width: 7.5rem;
    height: 0.88rem;
    background-image: url(../assets/LoignHeader.jpg);
    background-size:100% 100%;
}
.back{
    margin-left: 0.3rem;
    width: 0.2rem;
    height: 0.38rem;
    margin-bottom: 0.42rem;
}
</style>

