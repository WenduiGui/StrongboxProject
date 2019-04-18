<template>
  <div id="Body1">
    <div class="Tell">
      <label for>
        <strong>手机</strong>
      </label>
      <form action>
        <input type="number" placeholder="请输入手机号">
      </form>
    </div>
    <div class="Captcha">
      <label for>
        <strong>验证码</strong>
      </label>
      <input type="text" placeholder="请输入验证码" class="i1">

      <!-- <input v-if="!hasbtn" type="text" value="秒">
      <input @click="content" type="button" value="获取验证码" class="btn">-->

      <button class="btn" @click="countDown" :class="{disabled: !this.canClick}">{{content}}</button>
    </div>
    <div class="Password">
      <label for>
        <strong>密码</strong>
      </label>
      <form>
        <input type="password" placeholder="请输入新密码">
      </form>
    </div>
    <div class="Register" @click="get">注册</div>
  </div>
</template>

<script>
import { fontsizeset } from "@/fontsizeset.js";
export default {
  data() {
    return {
      hasbtn: true,
      content: "获取验证码", // 按钮里显示的内容
      totalTime: 60 ,//记录具体倒计时时间
      canClick: true ,//添加canClick
    };
  },
  methods: {
    // content() {
    //   this.hasBtn = false;
    //   setTimeout(() => {
    //     this.totalTime--
    //     this.content = this.totalTime + 's后重新发送'
    //     this.hasBtn = true
    //   }, 1000);
    // }

    countDown() {
      if (!this.canClick) return; //改动的是这两行代码
      this.canClick = false;
      this.content = this.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.content = this.totalTime + "s后重新发送";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    },
    get() {}
  }
};
</script>

<style scoped>
#Body1 {
  width: 7.5rem;
  height: 12.06rem;
  background-color: rgb(255, 255, 255);
}
#Body1 .Tell {
  width: 6.95rem;
  height: 1rem;
  border-bottom: 1px solid black;
  margin: 0 auto;
  margin-top: 0.6rem;
  box-sizing: border-box;
}
#Body1 .Tell label {
  float: left;
  font-size: 0.3rem;
  margin-top: 0.46rem;
  margin-left: 0.02rem;
}
#Body1 .Tell input {
  float: left;
  border: 0px;
  width: 5.3rem;
  height: 0.6rem;
  margin-left: 0.9rem;
  margin-top: 0.3rem;
  font-size: 0.33rem;
}
#Body1 .Captcha {
  width: 6.95rem;
  height: 1rem;
  border-bottom: 1px solid black;
  margin: 0 auto;
  box-sizing: border-box;
}
#Body1 .Captcha label {
  float: left;
  font-size: 0.3rem;
  margin-top: 0.46rem;
  margin-left: 0.02rem;
}
#Body1 .Captcha .i1 {
  float: left;
  border: 0px;
  width: 3.2rem;
  height: 0.6rem;
  margin-left: 0.6rem;
  margin-top: 0.3rem;
  font-size: 0.33rem;
}
#Body1 .Captcha .btn {
  float: left;
  color: #0395ff;
  border: 0px;
  background-color: #fff;
  font-size: 0.31rem;
  margin-top: 0.3rem;
  width: 2.2rem;
  height: 0.6rem;
}
#Body1 .Password {
  width: 6.95rem;
  height: 1rem;
  border-bottom: 1px solid black;
  margin: 0 auto;
  box-sizing: border-box;
}
#Body1 .Password label {
  float: left;
  font-size: 0.3rem;
  margin-top: 0.46rem;
  margin-left: 0.02rem;
}
#Body1 .Password input {
  float: left;
  border: 0px;
  width: 5.3rem;
  height: 0.6rem;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  font-size: 0.33rem;
}
#Body1 .Register {
  width: 6.94rem;
  height: 0.88rem;
  background-color: #0091fe;
  margin-top: 0.58rem;
  margin-left: 0.26rem;
  border-radius: 2%;
  color: #fff;
  font-size: 0.33rem;
  line-height: 0.88rem;
  text-align: center;
}
</style>
