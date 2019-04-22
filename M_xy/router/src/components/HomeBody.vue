<template>
  <div id="Body">
    <div class="Name">
      <label class="name">{{name}}</label>
      <input type="text" placeholder="请输入用户名" class="User_name">
    </div>
    <div class="Pass">
        <label class="pass">{{pass}}</label>
        <input type="password" placeholder="请输入密码" class="Input_password">
    </div>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data() {
    return {
        name:"用户名",
        pass:"密码",
    };
  }
};
</script>

<style>
#Body {
    width:7.5rem;
    height: 2rem;
}
#Body .Name{
    width: 7.5rem;
    height: 1.01rem;
    border-bottom: 1px solid #e4e4e6;
    border-top: 1px solid #e4e4e6;
    box-sizing: border-box;
}
#Body .Name .name{
    font-size: 0.3rem;
    float: left;
    line-height: 1rem;
    margin-left: 0.44rem;
}
#Body .Name .User_name{
    font-size: 0.27rem;
    float: left;
    margin-left: 0.47rem;
    border: 0px;
    width: 5.68rem;
    height: 100%;
}
#Body .Pass{
    width: 7.5rem;
    height: 0.99rem;
    border-bottom: 1px solid #e4e4e6;
    box-sizing: border-box;
}
#Body .Pass .pass{
    font-size: 0.3rem;
    float: left;
    line-height: 1rem;
    margin-left: -0.88rem;
}
#Body .Pass .Input_password{
    font-size: 0.27rem;
    float: left;
    margin-left: 0.47rem;
    border: 0px;
    width: 5.68rem;
    height: 100%;
}
</style>

