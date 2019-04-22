<template>
  <div class="Recoedb">
    <div class="Opendoor">
      <ul>
        <li v-for="item,index in list">
          <img :src="item.url" alt>
          <span class="door">
            {{item.door}}
            <br>
            <span class="time">{{item.time}}</span>
          </span>
          <span class="address">{{item.address}}</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data() {
    return {
      list: [
        {
          url: require("./../assets/move@2x.png"),
          door: "有人移动保险箱",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/electricity@2x.png"),
          door: "保险箱点亮低于20%",
          time: "25分钟前",
          address: "广东"
        },
        {
          url: require("./../assets/modify@2x.png"),
          door: "修改配置",
          time: "2天前",
          address: "上海"
        },
        {
          url: require("./../assets/electricity@2x.png"),
          door: "保险箱电量低于20%",
          time: "18天前",
          address: "上海"
        },
        {
          url: require("./../assets/move@2x.png"),
          door: "有人移动保险箱",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/move@2x.png"),
          door: "有人移动保险箱",
          time: "2分钟前",
          address: "杭州"
        }
      ],
    };
  }
};
</script>


<style>
.Recoedb {
  width: 7.5rem;
  height: 11.08rem;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
}
.Recoedb .Opendoor {
  width: 6.9rem;
  height: 11.08rem;
  box-sizing: border-box;
  margin: 0 auto;
}
.Recoedb .Opendoor img {
  width: 0.9rem;
  height: 0.9rem;
  float: left;
  margin-top: 0.25rem;
}
.Recoedb .Opendoor li {
  width: 6.9rem;
  height: 1.42rem;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  list-style: none;
}
.Recoedb .Opendoor .door {
  font-size: 0.3rem;
  float: left;
  margin-top: 0.27rem;
  margin-left: 0.24rem;
}
.Recoedb .Opendoor .door .time {
  color: #9c9c9c;
  font-size: 0.24rem;
}
.Recoedb .Opendoor .address {
  color: #9d9d9d;
  font-size: 0.3rem;
  margin-right: 0.3rem;
  float: right;
  line-height: 1.42rem;
}


</style>