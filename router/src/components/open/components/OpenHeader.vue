<template>
  <div id="Header">
    <img src="../assets/back.png" alt>
    <p class="word_head">米洛保险箱</p>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
   name:"Header",
  data(){
    return{
      url:require ("../assets/back.png"),
      word:"米洛保险箱"
    }
  }
};
</script>

<style scoped>
#Header {
  width: 7.5rem;
  height: 0.88rem;
  background-color: black;
}
#Header img {
  float: left;
  font-size: 0.43rem;
  margin-top: 0.3rem;
  margin-left: 0.22rem;
  line-height: 0.88rem;
  width: 0.23rem;
  height: 0.35rem;
}
#Header .word_head {
  float: left;
  font-size: 0.34rem;
  color: #ffffff;
  line-height: 0.88rem;
  margin-left: 2.5rem;
}
</style>
