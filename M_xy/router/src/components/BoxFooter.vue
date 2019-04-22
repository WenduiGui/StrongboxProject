<template>
  <div id="BoxFooter">
    <div id="box" @click="getbox">
      <router-link to="/box">
        <img :src="Box" alt>
        <p :style="[Boxcolor]">{{box}}</p>
      </router-link>
    </div>
    <div id="open" @click="getopen">
      <!-- XXXXX -->
      <router-link :to="{name:'open'}">
        <img :src="open" alt>
        <p :style="[Opencolor]">{{opendoor}}</p>
      </router-link>
    </div>
    <!-- v-if="hsbtn" -->
    <div id="recoed" @click="getrecoed">
      <router-link to="/Recoed">
        <img :src="Recoed" alt>
        <p :style="[Recoedcolor]">{{recoed}}</p>
      </router-link>
    </div>
    <div id="user" @click="getuser">
      <router-link to="/user">
        <img :src="User" alt>
        <p :style="[Usercolor]">{{user}}</p>
      </router-link>
    </div>
  </div>
</template>

<style>
#BoxFooter {
  width: 7.5rem;
  height: 0.98rem;
  border-top: 1px solid #cacaca;
}
#box {
  font-size: 0.2rem;
  float: left;
  width: 1.54rem;
  height: 100%;
  margin-left: 0.3rem;
}
#box a {
  text-decoration: none;
  color: #7c7c7c;
  margin-left: 0.33rem;
}
#box img {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.15rem;
}
#box p {
  margin-left: 0.27rem;
}
#open {
  font-size: 0.2rem;
  float: left;
  width: 1.9rem;
  height: 100%;
}
#open a {
  text-decoration: none;
  color: #7c7c7c;
  margin-left: 0.6rem;
}
#open img {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.15rem;
}
#open p {
  margin-left: 0.41rem;
}
#recoed {
  font-size: 0.2rem;
  float: left;
  /* width: 1.88rem; */
  height: 100%;
}
#recoed a {
  text-decoration: none;
  color: #7c7c7c;
  margin-left: 0.55rem;
}
#recoed img {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.15rem;
}
#recoed p {
  margin-left: 0.41rem;
}
#user {
  font-size: 0.2rem;
  float: right;
  /* width: 1.88rem; */
  margin-right: 0.52rem;
  height: 100%;
}
#user a {
  text-decoration: none;
  color: #7c7c7c;
  margin-left: 0.54rem;
}
#user img {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.15rem;
}
#user p {
  margin-left: 0.38rem;
}
</style>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  name: "BoxFooter",
  data() {
    return {
      Box: require("./../assets/tab_safebox_pre@2x.png"),
      box: "保险箱",
      opendoor: "开门记录",
      open: require("./../assets/tab_opendoor@2x.png"),
      recoed: "报警记录",
      Recoed: require("./../assets/tab_alarm@2x.png"),
      User: require("./../assets/tab_associated@2x.png"),
      user: "关联用户",
      // hsbtn:true,
      Boxcolor: { color: "#0091ff" },
      Opencolor: { color: "#8c8c8c" },
      Recoedcolor: { color: "#8c8c8c" },
      Usercolor: { color: "#8c8c8c" }
    };
  },
  methods: {
    getbox() {
      this.Boxcolor = {"color":"#0091ff"}
      this.Box = require("./../assets/tab_safebox_pre@2x.png");
    },
    getopen() {
      this.Opencolor = {"color":"#0091ff"}
      this.open = require("./../assets/tab_opendoor_pre@2x.png");
    },
    getrecoed() {
      this.Recoedcolor = {"color":"#0091ff"}
      this.Recoed = require("./../assets/tab_alarm_pre@2x.png");
    },
    getuser() {
      this.Usercolor = {"color":"#0091ff"}
      this.User = require("./../assets/tab_associated_pre@2x.png");
    }
  }
};
</script>