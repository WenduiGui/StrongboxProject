<template>
  <div class="AddFooter">
    <img class="tp" :src="url" alt="11">
    <span class="tjbxx">{{tjbxx}}</span>
    <span class="sys" >{{sys}}</span>
    <router-link to="/Home_page">
    <a class="tz" >{{saomiao}}</a>
    </router-link>
  </div>
</template>

<script>
import fontsizeset from "../fontsizeset.js";
export default {
  data() {
    return {
      url: require("../assets/切图/启动图标/hdpi/applogo.png"),
      tjbxx: "添加保险箱",
      sys:"扫一扫保险箱二维码即可自动添加保险箱",
      saomiao:"扫描二维码添加"
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.AddFooter {
  width: 7.5rem;
  height: 12.06rem;
  /* border: 1px solid red; */
}
.AddFooter .tjbxx {
    color:#010101;
    float: left;
  /* margin-top: 3.8rem; */
  margin-left: 2.8rem;
  font-size: 0.45rem;
}
.AddFooter .tp{
  margin-top: 1.8rem;
  margin-left: 3.25rem;
}
.AddFooter .sys{
    margin-left: 1.24rem;
    margin-top: 0.27rem;
    font-size: 0.3rem;
    float: left;
    color: #9e9e9e;
}
.AddFooter .tz{
    float: left;
    font-size: 0.35rem;
    text-decoration: none;
    margin-top: 5.89rem;
    margin-left: 2.7rem;
    color: #068cff;
}
</style>
