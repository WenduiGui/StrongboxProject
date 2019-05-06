<template>
  <div id="conterne">
    <h2 class="xlh">{{xlh}}</h2>
    <h2 class="XLH">{{XLH}}</h2>
    <br>
    <hr class="xhx">
    <h2 class="hq">{{hq}}</h2>
    <h2 class="dz">{{dz}}</h2>
    <br>
    <hr class="XHX">
    <h2 class="lj">{{lj}}</h2>
    <h2 class="ylj">{{ylj}}</h2>
    <br>
    <hr class="XHX">
    <h2 class="lj">{{lj}}</h2>
    <h2 class="ylj">{{ylj}}</h2>
    <br>
    <hr class="XHX">
  </div>
</template>
<script>
export default {
  data() {
    return {
      xlh: "序列号",
      XLH: "GFRGR44FDFD5FD",
      hq: "获取IP",
      dz:"192.168.1.1",
      lj:"固态版本",
      ylj:"V2.01245",
      lj:"连接状态",
      ylj:"已连接"
    };
  }
};
</script>
<style scoped>
#conterne {
  width: 46.875rem;
  height: 25.5rem;
  /* border: 0.0625rem solid black; */
  /* margin-top: 1.5rem; */
}
#conterne .xlh {
  float: left;
  font-size: 0.2rem;
  color: #666666;
  margin-top: 0.25rem;
  margin-left: 0.1875rem;
}
#conterne .XLH {
  font-size: 0.2rem;
  color: #010101;
  float: right;
  margin-top: 0.25rem;
  margin-right: 0.1875rem;
}
#conterne .xhx {
  margin-top: 0.55rem;
  width: 4.3125rem;
  margin-left: 0.1875rem;
}
#conterne .hq {
  float: left;
  font-size: 2rem;
  color: #666666;
  margin-top: 1.5rem;
  margin-left: 1.875rem;
}
#conterne .dz {
  font-size: 2rem;
  color: #010101;
  float: right;
  margin-top: 1.5rem;
  margin-right: 1.857rem;
}
#conterne .XHX {
  margin-top: 4.8rem;
  width: 43.125rem;
  margin-left: 1.875rem;
}
#conterne .lj {
  float: left;
  font-size: 2rem;
  color: #666666;
  margin-top: 1.5rem;
  margin-left: 1.875rem;
}
#conterne .ylj {
  font-size: 2rem;
  color: #010101;
  float: right;
  margin-top: 1.5rem;
  margin-right: 1.875rem;
}
</style>
