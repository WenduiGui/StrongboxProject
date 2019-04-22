<template>
  <div class="Header">
    <router-link to="/box">
    <img :src="url" alt>
    </router-link>
    <p>{{box}}</p>
  </div>
</template>

<script>
import { fontsizeset } from "../fontsizeset.js";
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
.Header {
  width: 7.5rem;
  height: 0.88rem;
  background-color: black;
}
.Header img {
  float: left;
  font-size: 0.43rem;
  margin-top: 0.3rem;
  margin-left: 0.22rem;
  line-height: 0.88rem;
  width: 0.23rem;
  height: 0.35rem;
}
.Header p {
  float: left;
  font-size: 0.34rem;
  color: #ffffff;
  line-height: 0.88rem;
  margin-left: 2.5rem;
}
</style>
