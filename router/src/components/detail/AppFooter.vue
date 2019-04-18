<template>
  <div id="footer">
    <h2 class="bxx">{{bxx}}</h2>
    <h2 class="miko">{{miko}}</h2>
    <a class="tz" href="https:baidu.com">></a>
    <br>
    <hr class="xhx">
    <h2 class="pp">{{pp}}</h2>
    <h2 class="sx">{{sx}}</h2>
    <hr class="hx">
  </div>
</template>
<script>
export default {
  data(){
    return{
      bxx:"保险箱名称",
      miko:"MIKO保险箱",
      pp:"品牌",
      sx:"三星"
    }
  }
};
</script>
<style scoped>
#footer {
  width: 46.8125rem;
  height: 16rem;
  border: 0.0625rem solid rgb(255, 255, 255);
}
#footer .bxx {
  float: left;
  font-size: 2rem;
  color: #666666;
  margin-top: 2.5rem;
  margin-left: 1.875rem;
}
#footer .miko {
  font-size: 2rem;
  color: #010101;
  /* float: right; */
  margin-top: 2.5rem;
  margin-left: 30rem;
}
#footer .tz {
  float: left;
  margin-left: 42.7rem;
  margin-top: -3.9rem;
  font-size: 3.7rem;
  text-decoration: none;
  color: #b5b5b5;
}
#footer .xhx {
  margin-top: 1.5rem;
  width: 43.125rem;
  margin-left: 1.875rem;
}
#footer .pp {
  float: left;
  font-size: 2rem;
  color: #666666;
  margin-top: 2.5rem;
  margin-left: 1.875rem;
}
#footer .sx {
  font-size: 2rem;
  color: #010101;
  float: left;
  margin-top: 2.5rem;
  margin-left: 34.5rem;
}
#footer .hx {
  margin-top: 8rem;
  width: 43.125rem;
  margin-left: 1.875rem;
}
</style>