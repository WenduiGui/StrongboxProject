<template>
  <div id="RegBody">
    <div class="Tell">
      <label for class="Phone">
        <strong>{{tell}}</strong>
      </label>
      <form action>
        <input type="number" placeholder="请输入手机号" class="Num">
      </form>
    </div>
    <div class="Captcha">
      <label for class="Yzm">
        <strong>{{Yzm}}</strong>
      </label>
      <input type="text" placeholder="请输入验证码" class="inputYzm">

      <!-- <input v-if="!hasbtn" type="text" value="秒">
      <input @click="content" type="button" value="获取验证码" class="btn">-->

      <button class="btn" @click="countDown" :class="{disabled: !this.canClick}">{{content}}</button>
    </div>
    <div class="Password">
      <label for class="Cipher">
        <strong>{{Cipher}}</strong>
      </label>
      <form>
        <input type="password" placeholder="请输入新密码" class="newCipher">
      </form>
    </div>
    <router-link to="/">
      <div class="Register" @click="git">{{zhuce}}</div>
    </router-link>
    <div class="Ystk">
      <p class="tongyi">{{tongyi}}<span class="yinsi">{{yinsi}}</span></p>
    </div>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data() {
    return {
      tell: "手机",
      Yzm: "验证码",
      Cipher: "密码",
      zhuce: "注册",
      hasbtn: true,
      content: "获取验证码", // 按钮里显示的内容
      totalTime: 60, //记录具体倒计时时间
      canClick: true, //添加canClick
      tongyi:"注册代表同意",
      yinsi:"《隐私条款》"
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

    git() {
      alert("注册成功")
    }
  }
};
</script>

<style>
#RegBody {
  width: 7.5rem;
  height: 12.06rem;
  background-color: rgb(255, 255, 255);
}
#RegBody .Tell {
  width: 6.95rem;
  height: 1rem;
  border-bottom: 1px solid black;
  margin: 0 auto;
  margin-top: 0.6rem;
  box-sizing: border-box;
}
#RegBody .Tell .Phone {
  float: left;
  font-size: 0.3rem;
  margin-top: 0.46rem;
  margin-left: 0.02rem;
}
#RegBody .Tell .Num {
  float: left;
  border: 0px;
  width: 5.3rem;
  height: 0.6rem;
  margin-left: 0.9rem;
  margin-top: 0.3rem;
  font-size: 0.33rem;
}
#RegBody .Captcha {
  width: 6.95rem;
  height: 1rem;
  border-bottom: 1px solid black;
  margin: 0 auto;
  box-sizing: border-box;
}
#RegBody .Captcha .Yzm {
  float: left;
  font-size: 0.3rem;
  margin-top: 0.46rem;
  margin-left: 0.02rem;
}
#RegBody .Captcha .inputYzm {
  float: left;
  border: 0px;
  width: 3.2rem;
  height: 0.6rem;
  margin-left: 0.6rem;
  margin-top: 0.3rem;
  font-size: 0.33rem;
}
#RegBody .Captcha .btn {
  float: left;
  color: #0395ff;
  border: 0px;
  background-color: #fff;
  font-size: 0.31rem;
  margin-top: 0.3rem;
  width: 2.2rem;
  height: 0.6rem;
}
#RegBody .Password {
  width: 6.95rem;
  height: 1rem;
  border-bottom: 1px solid black;
  margin: 0 auto;
  box-sizing: border-box;
}
#RegBody .Password .Cipher {
  float: left;
  font-size: 0.3rem;
  margin-top: 0.46rem;
  margin-left: 0.02rem;
}
#RegBody .Password .newCipher {
  float: left;
  border: 0px;
  width: 5.3rem;
  height: 0.6rem;
  margin-left: 0.9rem;
  margin-top: 0.3rem;
  font-size: 0.33rem;
}
#RegBody .Register {
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
#RegBody .Ystk{
  width: 7.5rem;
  height: 0.33rem;
  margin-top: 5.9rem;
}
#RegBody .Ystk .tongyi{
  color: #9c9c9c;
  font-size: 0.3rem;
  margin-left: 2.1rem;
  float: left;
}
#RegBody .Ystk .yinsi{
  color: #008dfd;

}
</style>
