<template>
    <div class="AppContianerbox">

        <div></div>

        <ul class="AppContianerul">
            <li class="AppContianerli1" v-for="item in list">
            <span class="AppContianerspan1">{{item.num}}</span>
            <img class="AppContianerimg1" :src="url" alt="">
            </li>
            <div class="AppContianerbox2"></div>
            <li class="AppContianerli2" v-for="item in listTow">
            <span class="AppContianerspan2">{{item.span}}</span>
            <img class="AppContianerimg2" :src="url" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import fontsizeset from '@/fontsizeset.js'
import { METHODS } from 'http';
export default {
    data(){
        return{
            url:require("@/assets/切图/ios/back1.png"),
            list:[
                {num:"通知消息"},
                {num:"修改密码"},
            ],
            listTow:[
                {span:"意见反馈"},
                {span:"关于"},
            ]
        };
       
            
        
    }
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
.AppContianerbox{
    width: 7.5rem;
    height: 4.65rem;
    margin-top: 0.37rem;
}
.AppContianerul{
    width: 7.5rem;
    height: 4.65rem;

}
.AppContianerbox2{
    width: 7.5rem;
    height: 0.24rem;
    background-color: #f5f5f7;
}
.AppContianerli1{
    width: 7.2rem;
    height: 1.11rem;
    border-top:0.01rem solid #d8d8d8;
    border-bottom:0.01rem solid #d8d8d8;
}
.AppContianerspan1{
        width: 1.22rem;
    height: 1.11rem;
    font-size: 0.3rem;
    height: 1.11rem;
    margin-left: 0.27rem;
    float: left;
    line-height: 1.11rem;
}
.AppContianerimg1{
    width: 0.2rem;
    height: 0.36rem;
    float: left;
    margin-top: 0.35rem;
    margin-left: 5.5rem;  
}
.AppContianerli2{
    width: 7.2rem;
    height: 1.11rem;
    border-top:0.01rem solid #d8d8d8;
    border-bottom:0.01rem solid #d8d8d8;
}
.AppContianerspan2{
    width: 1.22rem;
    height: 1.11rem;
    font-size: 0.3rem;
    height: 1.11rem;
    margin-left: 0.27rem;
    float: left;
    line-height: 1.11rem;
}
.AppContianerimg2{
    width: 0.2rem;
    height: 0.36rem;
    float: left;
    margin-top: 0.35rem;
    margin-left: 5.5rem;  
}
</style>

