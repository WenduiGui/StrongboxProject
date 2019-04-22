<template>
  <div id="Footer">
    <router-link to="/Add_to">
      <button class="Register">登陆</button>
    </router-link>
    <div class="zhuce">
      <router-link to="/Reg">
      <a href class="register">{{register}}</a>
      </router-link>
      <router-link to="/forget">
        <a href class="pass">{{pass}}</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data() {
    return {
      register: "注册用户",
      pass: "忘记密码"
    };
  }
};
</script>

<style>
#Footer {
  width: 7.5rem;
  height: 7.13rem;
}
#Footer .Register {
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
  border: 0;
}
#Footer .zhuce {
  width: 6.94rem;
  height: 1rem;
  margin-top: 0.58rem;
  margin-left: 0.26rem;
}
#Footer .zhuce .register {
  float: left;
  font-size: 0.3rem;
  text-decoration: none;
  color: black;
  line-height: 1rem;
}
#Footer .zhuce .pass {
  float: left;
  font-size: 0.3rem;
  text-decoration: none;
  color: black;
  line-height: 1rem;
  margin-left: 4.5rem;
}
</style>
