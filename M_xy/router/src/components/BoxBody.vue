<template>
  <div class="body">
    <div class="pica">
      <!-- <img :src="pic" alt=""> -->
      <span class="Safety_situation">{{Safety_situation}}</span>
      <span class="security">{{security}}</span>
    </div>
    <div class="state">
      <p class="position">{{position}}</p>
      <p class="current_state">{{current_state}}</p>
    </div>
    <div class="sensitivity">
      <div class="set">
        <p class="Setting">{{Setting}}</p>
        <p class="introduce">{{introduce}}</p>
      </div>
      <div class="level">
        <button class="btn one" :style="[divstyle1]" @click="btn1"></button>
        <button class="btn two" :style="[divstyle2]" @click="btn2"></button>
        <button class="btn three" :style="[divstyle3]" @click="btn3"></button>
        <button class="btn four" :style="[divstyle4]" @click="btn4"></button>
      </div>
      <div class="series">
        <ul>
            <li v-for="item,index in list">
              {{item.empty}}
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pic:require("../assets/pic.jpg")
      Safety_situation: "安全情况",
      security: "安全",
      position: "最后位置:杭州",
      current_state: "当前状态:打开",
      Setting: "灵敏度设置",
      introduce: "灵敏度介绍",
        list: [
          {
            empty: "一级"
          },
          {
            empty: "二级"
          },
          {
            empty: "三级"
          },
          {
            empty: "四级"
          }
        ],
      divstyle1: { "background-color": "#dae1e6" },
      divstyle2: { "background-color": "#dae1e6" },
      divstyle3: { "background-color": "#dae1e6" },
      divstyle4: { "background-color": "#dae1e6" }
    };
  },
  methods: {
    btn1() {
      this.divstyle1 = { "background-color": "#0091ff" };
      this.divstyle2 = { "background-color": "#dae1e6" };
      this.divstyle3 = { "background-color": "#dae1e6" };
      this.divstyle4 = { "background-color": "#dae1e6" };
    },
    btn2() {
      this.divstyle1 = { "background-color": "#0091ff" };
      this.divstyle2 = { "background-color": "#0091ff" };
      this.divstyle3 = { "background-color": "#dae1e6" };
      this.divstyle4 = { "background-color": "#dae1e6" };
    },
    btn3() {
      this.divstyle1 = { "background-color": "#0091ff" };
      this.divstyle2 = { "background-color": "#0091ff" };
      this.divstyle3 = { "background-color": "#0091ff" };
      this.divstyle4 = { "background-color": "#dae1e6" };
    },
    btn4() {
      this.divstyle1 = { "background-color": "#0091ff" };
      this.divstyle2 = { "background-color": "#0091ff" };
      this.divstyle3 = { "background-color": "#0091ff" };
      this.divstyle4 = { "background-color": "#0091ff" };
    }
  }
};
</script>

<style>
.body {
  width: 7.5rem;
  height: 11.08rem;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
}
.body .pica {
  width: 7.5rem;
  height: 6.63rem;
  background-image: url(../assets/pic.jpg);
  background-size: 100% 100%;
}
.body .pica .Safety_situation {
  color: #ffffff;
  font-size: 0.27rem;
  margin-top: 2.51rem;
  margin-left: 3.23rem;
  float: left;
}
.body .pica .security {
  clear: both;
  float: left;
  font-size: 0.66rem;
  color: #ffffff;
  margin-left: 3.1rem;
}
.body .state {
  width: 7.5rem;
  height: 0.9rem;
  border-top: 1px solid #0091fe;
  background-color: #0091fe;
}
.body .state .position {
  font-size: 0.26rem;
  width: 3.75rem;
  text-align: center;
  border-right: 1px solid #2fa8ff;
  box-sizing: border-box;
  line-height: 0.9rem;
  color: #ffffff;
  float: left;
}
.body .state .current_state {
  float: left;
  font-size: 0.26rem;
  width: 3.75rem;
  text-align: center;
  line-height: 0.9rem;
  color: #ffffff;
}
.body .sensitivity {
  width: 7.5rem;
  height: 3.55rem;
}
.body .sensitivity .set {
  width: 7.5rem;
  height: 1.4rem;
}
.body .sensitivity .set .Setting {
  font-size: 0.3rem;
  color: #cecece;
  margin-top: 0.8rem;
  margin-left: 0.3rem;
  float: left;
}
.body .sensitivity .set .introduce {
  font-size: 0.22rem;
  color: #008dff;
  margin-top: 0.89rem;
  margin-left: 4.21rem;
  float: left;
}
.body .sensitivity .level {
  width: 6.89rem;
  height: 0.55rem;
  margin: 0 auto;
}
.body .sensitivity .level .btn {
  float: left;
  border: 0px;
  width: 1.7rem;
  height: 0.55rem;
  border-right: 1px solid #ffffff;
  box-sizing: border-box;
}
.body .sensitivity .series {
  width: 6.89rem;
  height: 0.4rem;
  margin: 0 auto;
}
.body .sensitivity .series li{
    float: left;
    list-style: none;
    color: #b2b2b2;
    font-size: 0.2rem;
    width: 1.72rem;
    margin-top: 0.2rem;
    text-align: center;
}
</style>
