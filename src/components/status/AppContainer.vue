<template>
    <div id="app">
        <div id="header">
            <ul class="list">
                <li class="word1">{{word1}}</li>
                <li class="word2">{{word2}}</li>
            </ul>
            <ul class="imgList" >
                <li><img :src="pic" alt=""></li>
                <li><img :src="pic1" alt=""></li>
                <li><img :src="pic1" alt=""></li>
                <li><img :src="pic1" alt=""></li>
            </ul>
            <ul class="wordList">
                <li><span class="font">{{font1}}</span></li>
                <li><span class="font1">{{font2}}</span></li>
                <li><span class="font1">{{font3}}</span></li>
                <li><span class="font1">{{font4}}</span></li>
            </ul>
        </div>
        <router-link to="/Subrouter"></router-link>
    </div>
</template>

<script>
export default {
    name:"app",
    data(){
        return {
            word1:"灵敏度设置",
            word2:"灵敏度介绍",
            pic:require("../../assets/切图/ios/sensitivity.png"),
            pic1:require("../../assets/切图/ios/sensitivitygray.png"),
            font1:"一级",
            font2:"二级",
            font3:"三级",
            font4:"四级",
        }
    }
}
</script>

<style scoped>
    #header{
        width: 7.45rem;
        height: 3.57rem;
    }
    #header .list .word1{
        color: #c8c8c8;
        float: left;
        font-size: 0.36rem;
        list-style: none;
        margin-left: 0.30rem;
        margin-top: 0.81rem;
        color: #c2c2c2;
    }
    #header .list .word2{
        float: right;
        margin-right: 0.30rem;
        margin-top: 0.81rem;
        list-style: none;
        font-size: 0.32rem;
        color: #1690ff;
    }
    #header .imgList{
        clear: both;
        margin-left: 0.27rem;
        
    }
    #header .imgList li{
        float: left;
        list-style: none;
        margin-top: 0.30rem;
    }
    #header .imgList img{
        width: 1.72rem;
        height: 0.53rem;
        margin-left: 0.01rem;
    }
    #header .wordList li{
        list-style: none;
        float: left;
        width: 1.72rem;
        height: 0.53rem;
    }
    #header .wordList .font{
        font-size: 0.26rem;   
        clear: both;
        margin-left: 0.92rem;
        float: left;
        color: #8c8c8c;
    }
    #header .wordList .font1{
        font-size: 0.26rem;   
        clear: both;
        margin-left: 1.00rem;
        float: left;
        color: #8c8c8c;
    }
</style>
