<template>
  <div id="header">
    <a class="tz" href="https:baidu.com">  <img src="..\..\..\切图\ios\back@2x.png" alt=""></a>
    <h1 class="bxx">{{bxx}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      bxx:"保险箱详情"
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
#header {
  width: 46.875rem;
  height: 5.5rem;
  border: 0.0625rem solid black;
  background-color: #000000;
}
#header .tz {
  color: white;
  font-size: 50px;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-left: 1.6875rem;
  float: left;
}
#header .bxx {
  float: left;
  color: white;
  margin-left: 15.4rem;
  font-size: 32px;
  margin-top: 1.35rem;
  font-size: 2rem ;
}
</style>
