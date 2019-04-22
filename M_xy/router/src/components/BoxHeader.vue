<template>
  <div class="BoxH">
    <router-link to="/Home_page">
      <img :src="url" alt>
    </router-link>
    <p>{{box}}</p>
    <router-link to="/Details">
      <span>···</span>
    </router-link>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data() {
    return {
      box: "米洛保险箱",
      url: require("../assets/back.png")
    };
  }
};
</script>

<style>
.BoxH {
  width: 7.5rem;
  height: 0.88rem;
  background-color: #0091fe;
}
.BoxH img {
  float: left;
  font-size: 0.43rem;
  margin-top: 0.3rem;
  margin-left: 0.22rem;
  line-height: 0.88rem;
  width: 0.23rem;
  height: 0.35rem;
}
.BoxH p {
  float: left;
  font-size: 0.34rem;
  color: #ffffff;
  line-height: 0.88rem;
  margin-left: 2.5rem;
}
.BoxH span {
  float: right;
  line-height: 0.88rem;
  margin-right: 0.3rem;
  color: #ffffff;
}
</style>
