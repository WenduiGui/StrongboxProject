<template>
  <div id="Body">
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

<script scoped>
import { fontsizeset } from "./../fontsizeset.js";
export default {
  data() {
    return {
      list: [
        {
          url: require("./../assets/Open.jpg"),
          door: "开门",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/Open.jpg"),
          door: "开门",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/Open.jpg"),
          door: "开门",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/Open.jpg"),
          door: "开门",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/Open.jpg"),
          door: "开门",
          time: "2分钟前",
          address: "杭州"
        },
        {
          url: require("./../assets/Open.jpg"),
          door: "开门",
          time: "2分钟前",
          address: "杭州"
        }
      ],
    };
  }
};
</script>


<style scoped>
#Body {
  width: 7.5rem;
  height: 12.06rem;
}
#Body .Opendoor {
  width: 6.9rem;
  height: 11.08rem;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  margin: 0 auto;
}
#Body .Opendoor img {
  width: 0.9rem;
  height: 0.9rem;
  float: left;
  margin-top: 0.25rem;
}
#Body .Opendoor li {
  width: 6.9rem;
  height: 1.42rem;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  list-style: none;
}
#Body .Opendoor .door {
  font-size: 0.3rem;
  float: left;
  margin-top: 0.27rem;
  margin-left: 0.24rem;
}
#Body .Opendoor .door .time {
  color: #9c9c9c;
  font-size: 0.24rem;
}
#Body .Opendoor .address {
  color: #9d9d9d;
  font-size: 0.3rem;
  margin-left: 4.25rem;
  float: left;
  line-height: 1.42rem;
}
#Footer {
  width: 7.5rem;
  height: 0.98rem;
}
#Footer .box{
   width: 2.42rem;
   height: 0.98rem;
}

</style>
