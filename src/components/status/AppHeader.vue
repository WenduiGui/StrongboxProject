<template>
    <div id="app">
        <div class="box-top">
            <router-link to="/ReturnS">
                <img class="pic" :src="imgurl" alt="">
            </router-link>
                <span class="font">{{font}}</span>
            <router-link to="/Details">
                <img class="pic1" :src="imgurl1" alt="">
            </router-link>
            </div>
        <div class="header1">
            <div class="word-box">
                <span class="word11">{{word1}}</span>
                <span class="word22">{{word2}}</span>
            </div>
            <ul class="list">
                <li class="val1">{{val1}}</li>
                <li class="val2">{{val2}}</li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
import {fontsizeset} from './../../fontsizeset.js'
import { request } from 'http';
export default {
    name:"app",
    data(){
        return{
            imgurl1:require("../../assets/切图/ios/more@2x.png"),
            imgurl:require('../../assets/切图/ios/back@2x.png'),
            word1:"安全情况",
            word2:"安全",
            val1:"最后位置:杭州",
            val2:"当前状态:打开",
            font:"米克保险箱",
        }
    }
    
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #app .header1{
        background-image: url(../../assets/切图/ios/background.png);
        background-size: 100%;
        width: 7.50rem;
        height: 7.56rem;
    }
    .box-top{
        width: 7.50rem;
        height: 0.88rem;
        background-color: #0091fe;
    }
    .box-top .pic{
        margin-left: 0.30rem;
        margin-top: 0.30rem;
        width: 0.21rem;
        height: 0.34rem;
        float: left;
    }
    .box-top .font{
        font-size: 0.32rem;
        color: white;
        float: left;
        margin-left: 2.40rem;
        margin-top: 0.2rem;
    }
    .box-top .pic1{
        float: right;
        width: 0.47rem;
        height: 0.13rem;
        margin-top: 0.40rem;
        margin-right: 0.31rem;
    }
    .header1 .word-box{
        float: left;
        width: 1.33rem;
        height: 1.11rem;
        margin-left: 3.2rem;
        margin-top: 2.42rem;
  
    }
    .header1 .word11{
        color: white;
        font-size: 0.28rem;
        float: left;
        margin: 0;
        padding: 0;

    }
    .header1 .word22{
        color: white;
        font-size: 0.6rem;
        float: left;
        margin:0;
        padding: 0;
    }
    .header1 .list{
        clear: both;
        position: relative;
        top: 3.09rem;
        width: 7.50rem;
        height: 0.88rem;
        background-color: #0091fe;
    }
    .header1 .list .val1{
        float: left;
        width: 3.70rem;
        height: 0.88rem;
        list-style: none;
        color: white;
        font-size: 0.32rem;
        line-height: 0.88rem;
        text-align: center;
        border: 1px solid #2fa9ff;
    }
    .header1 .list .val2{
        float: right;
        width: 3.70rem;
        height: 0.88rem;
        list-style: none;
        color: white;
        font-size: 0.32rem;
        line-height: 0.88rem;
        text-align: center;
        border: 1px solid #2fa9ff;
    }
</style>
