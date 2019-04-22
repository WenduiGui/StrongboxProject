<template>
  <div id="Header">
    <img :src="url" alt>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
    data(){
        return{
            url: require("./../assets/tab_safebox_pre@3x.png"),
    }
        }
};
</script>

<style>
#Header {
  width: 7.5rem;
  height: 3.8rem;
}
#Header img{
    width: 1.82rem;
    height: 1.82rem;
    margin-top: 1.24rem;
    margin-left: 2.84rem;
}

</style>
