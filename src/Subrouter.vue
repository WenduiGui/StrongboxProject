<template>
  <div id="app">
    <div id="nav">
        <router-link to="/Strongbox" >
        <div class="list1" @click="ll" >
        <img class="pic1" :src="url1" alt="">
        <span class="wrod wrod1" :style="[btn1]">{{wrod1}}</span>
        </div>
        </router-link>
        <router-link to="/OpeningRecord">
        <div class="list2" >
        <img class="pic2" :src="url2" alt="">
        <span class="wrod wrod2 " :style="[btn2]">{{wrod2}}</span>
        
        </div>
        </router-link>
        <router-link to="/AlarmRecord">
        <div class="list3">
        <img class="pic3" :src="url3" alt="">
        <span class="wrod wrod3">{{wrod3}}</span>
        </div>
        </router-link>
        <router-link to="/AssociatedUsers">
        <div class="list4">
        <img class="pic4" :src="url4" alt="">
        <span class="wrod wrod4">{{wrod4}}</span>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { request } from 'http';
import { fontsizeset } from '@/fontsizeset.js'
export default {
  name:"app",
  data(){
    return{
      btn1:{'color':"#818181"},
      btn2:{'color':"#818181"},
      url1:require("./assets/切图/ios/tab_safebox_pre@2x.png"),
      wrod1:"保险箱",
      wrod2:"开门记录",
      url2:require("./assets/切图/ios/tab_opendoor@2x.png"),
      wrod3:"报警记录",
      url3:require("./assets/切图/ios/tab_alarm@2x.png"),
      wrod4:"关联用户",
      url4:require("./assets/切图/ios/tab_associated@2x.png"),
    }
  },
  methods:{
    ll(){
       this.btn1={'color':"#0091fe"}
    }
  }

}
</script>

<style>
  /* .a{
    color: dodgerblue;
  } */
  #nav{
    width: 7.50rem;
    position: absolute;
    top: 12rem;
    padding-top: 0.1rem;
    border-top: 1px solid #c9c9c9;
  }
  #nav .list1{
    float: left;
    width: 0.89rem;
    height: 0.86rem;
    margin-left: 0.6rem;
  }
  #nav .list1 .pic1{
    width: 0.46rem;
    height: 0.46rem;
    display: block;
    margin-left: 0.15rem;
    /* margin-top: 0rem; */
  }
  #nav .wrod{
    float: left;
    font-size: 0.26rem;
    color: #818181;
    margin: 0;
    padding: 0;
    
  }
  /* #nav .list1 a{
    font-size: 0.28rem;
    float: left;
  } */
  #nav .list2{
    float: left;
    width: 1.2rem;
    height: 0.86rem;
    margin-left: 0.7rem;
  }
  #nav .list2 .pic2{
    width: 0.46rem;
    height: 0.46rem;
    display: block;
    /* margin-top: 0rem; */
    margin-left: 0.25rem;
  }

  /* #nav .list2 a{
    font-size: 0.23rem;
    float: left;
  } */
  #nav .list3{
    float: left;
    width: 1.2rem;
    height: 0.86rem;
    margin-left: 0.7rem;
  }
  #nav .list3 .pic3{
    width: 0.46rem;
    height: 0.46rem;
    display: block;
    margin-left: 0.27rem;
  }
  
  #nav .list3 a{
    font-size: 0.23rem;
    float: left;
  }
   #nav .list4{
    float: left;
    width: 1.2rem;
    height: 0.86rem;
    margin-left: 0.5rem;
    margin-top: 0.03rem;
  }
  #nav .list4 .pic4{
    width: 0.46rem;
    height: 0.46rem;
    display: block;
    margin-left: 0.27rem;
  }

  #nav .list4 a{
    font-size: 0.23rem;
    float: left;
  }
</style>
