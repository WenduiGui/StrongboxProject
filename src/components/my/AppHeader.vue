<template>
    <div class="headerbox">
    <img class="headerimg3" :src="url" alt="">
    <img class="headerimg" :src="url1" alt="">
    <span class="headerspan">{{span}}</span>
    <img class="headerimg2" :src="url2" alt="">
    <span class="headerspan1">{{spanTwo}}</span>
    </div>
</template>

<script>
import fontsizeset from '@/fontsizeset.js'
import { spread } from 'q';
export default {
    name:"headerbox",
    data(){
        return{
            url:require("@/assets/切图/ios/2.jpg"),
            url1:require("@/assets/切图/ios/back.png"),
            url2:require("@/assets/切图/ios/1.jpg"),
            span:"我的",
            spanTwo:"大风起兮",
        }
    }
    
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
.headerbox{
    width: 7.5rem;
    height: 4.35rem;
}
.headerimg{
    margin-left: 0.27rem;
    margin-top: 0.26rem;
    width: 0.2rem;
    height: 0.36rem;
    float: left;
    position: absolute;
    top: 0.26rem;
    right: 7rem;
}
.headerspan{
    margin-left: 2.95rem;
    margin-top:0.29rem;
    font-size: 0.32rem;
    float: left;
    position: absolute;
    top: 0.29rem;
    right: 3.44rem;
    color: white;
}
.headerimg2{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%; 
    position: absolute;
    top: 1.6rem;
    right: 2.95rem;
}
.headerimg3{
    width: 7.5rem;
    height: 4.35rem;
    background: url(../../assets/切图/ios/2.jpg);
	-webkit-filter: blur(10px);
	-moz-filter: blur(10px);
	-o-filter: blur(10px);
	-ms-filter: blur(10px);
	filter: blur(10px); 
}
.headerspan1{
    margin-left: 2.95rem;
    margin-top:0.29rem;
    font-size: 0.32rem;
    float: left;
    position: absolute;
    top:3.15rem;
    right: 3.14rem;
    color: white;
}
</style>



