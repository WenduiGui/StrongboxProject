<template>
  <div id="Footer">
    <router-link to="/Add">
         <div class="Register">{{word}}</div>
    </router-link>
    <div class="zhuce">
      <router-link to="/RegisteredUsers">
        <a href="" class="register">{{register}}</a>
      </router-link>
      <router-link to="/Password">
        <a href="" class="pass">{{pass}}</a>
      </router-link>
        
    </div>
  </div>
</template>

<script scoped>
import { fontsizeset } from "@/fontsizeset.js";
export default {
  name:"Footer",
    data(){
        return{
            word:"登录",
            register:"注册用户",
            pass:"忘记密码",
        }
    }
};
</script>

<style>
#Footer {
  width: 7.5rem;
  height: 7.13rem;
  background-color: #f5f5f7;

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
}
#Footer .zhuce {
  width: 6.94rem;
  height: 1rem;
  margin-top: 0.58rem;
  margin-left: 0.26rem;
}
#Footer .zhuce .register{
    float: left;
    font-size: 0.3rem;
    text-decoration: none;
    color: black;
    line-height: 1rem;
}
#Footer .zhuce .pass{
    float: left;
    font-size: 0.3rem;
    text-decoration: none;
    color: black;
    line-height: 1rem;
    margin-left: 4.5rem;
}
</style>
