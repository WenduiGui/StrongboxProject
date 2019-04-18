<template>
  <div id="Body">
    <div class="Name">
      <label for>{{name}}</label>
      <input type="text" placeholder="请输入用户名">
    </div>
    <div class="Pass">
        <label for="">{{pass}}</label>
        <input type="password" placeholder="请输入密码">
    </div>
  </div>
</template>

<script>
import { fontsizeset } from "@/fontsizeset.js";
export default {
  data() {
    return {
        name:"用户名",
        pass:"密码",
    };
  }
};
</script>

<style scoped>
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
#Body .Name label{
    font-size: 0.3rem;
    float: left;
    line-height: 1rem;
    margin-left: 0.44rem;
}
#Body .Name input{
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
#Body .Pass label{
    font-size: 0.3rem;
    float: left;
    line-height: 1rem;
    margin-left: 0.48rem;
}
#Body .Pass input{
    font-size: 0.27rem;
    float: left;
    margin-left: 0.7rem;
    border: 0px;
    width: 5.68rem;
    height: 100%;
}
</style>

