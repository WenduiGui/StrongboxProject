<template>
  <div class="Recoedh">
    <img :src="url" alt>
    <p>{{box}}</p>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data(){
    return{
      box:"米洛保险箱",
      url:require("../assets/back.png")
    }
  }
};
</script>

<style>
.Recoedh {
  width: 7.5rem;
  height: 0.88rem;
  background-color: black;
}
.Recoedh img {
  float: left;
  font-size: 0.43rem;
  margin-top: 0.3rem;
  margin-left: 0.22rem;
  line-height: 0.88rem;
  width: 0.23rem;
  height: 0.35rem;
}
.Recoedh p {
  float: left;
  font-size: 0.34rem;
  color: #ffffff;
  line-height: 0.88rem;
  margin-left: 2.5rem;
}
</style>
