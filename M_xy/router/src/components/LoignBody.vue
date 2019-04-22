<template>
    <div id="LoignBody">
        <img :src="url" alt="" class="Loigpic">
    </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
    name:"LoignBody",
    data(){
        return{
            url:require("../assets/LoignBody.jpg")
        }
    }
}
</script>
<style>
#LoignBody{
    width: 7.5rem;
    height: 8.1rem;
}
.Loigpic{
    width: 100%;
    height: 100%;
}
</style>
