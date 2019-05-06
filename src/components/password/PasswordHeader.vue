<template>
    <div id="tou">
        <img :src="url" alt="">
        <span>{{word}}</span>
    </div>
</template>

<script>
import {fontsizeset} from './fontsizeset.js'
export default {
    name:"tou",
    data(){
        return{
            word:"注册",
            url:require("./assets/back.png"),
        }
    }
}
</script>

<style scoped>
    #tou{
        width: 7.5rem;
        height: 0.93rem;
        background-color: black;
    }
    img{
        width: 0.23rem;
        height: 0.35rem;
        font-size: 0.37rem;
        float: left;
        margin-top: 0.3rem;
        margin-left: 0.22rem;
    }
    span{
        color: #ffffff; 
        font-size: 0.34rem;
        float: left;
        margin-left: 2.97rem;
        line-height: 0.93rem;

    }
</style>
