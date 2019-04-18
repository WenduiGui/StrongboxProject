<template>
  <div class="footer">
    <img class="tp" :src="url" alt="11">
    <span class="tjbxx">{{tjbxx}}</span>
    <span class="sys" >{{sys}}</span>
    <router-link to="/SafeboxHead"><span class="tz">{{word}}</span></router-link>
  </div>
</template>

<script>
import fontsizeset from "@/fontsizeset.js";
export default {
  data() {
    return {
      url: require("@/assets/切图/启动图标/hdpi/applogo.png"),
      tjbxx: "添加保险箱",
      sys:"扫一扫保险箱二维码即可自动添加保险箱",
      word:"扫描二维码添加",
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.footer {
  width: 7.5rem;
  height: 12.06rem;
  /* border: 1px solid red; */
}
.footer .tjbxx {
    color:#010101;
    float: left;
  /* margin-top: 3.8rem; */
  margin-left: 2.8rem;
  font-size: 0.45rem;
}
.footer .tp{
  margin-top: 1.8rem;
  margin-left: 3.25rem;
}
.footer .sys{
    margin-left: 1.24rem;
    margin-top: 0.27rem;
    font-size: 0.3rem;
    float: left;
    color: #9e9e9e;
}
.footer .tz{
    float: left;
    font-size: 0.35rem;
    text-decoration: none;
    margin-top: 5.89rem;
    margin-left: 2.7rem;
    color: #068cff;
}
</style>
