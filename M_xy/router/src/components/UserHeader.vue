<template>
    <div class="box">
        <img class="img1" src="../assets/back.png" alt="">
        <span class="span">{{span}}</span>
        <img class="img2" src="../assets/add.png" alt="">
    </div>
</template>

<script>
import fontsizeset from '../fontsizeset.js'
export default {
    data(){
        return{
            span:"米克保险箱",
        }
    }
}
</script>

<style>
*{
    padding: 0;
    margin:0;
}
.box{
    width: 7.5rem;
    height: 0.87rem;
    background: black;
}
.img1{
    margin-left: 0.3rem;
    margin-top: 0.26rem;
    float: left;
    width: 0.2rem;
    height:0.36rem;
}
.span{
    color: white;
    font-size: 0.3rem;
    margin-top: 0.3rem;
    margin-left: 2.51rem;
    float: left;
}
.img2{
    margin-left: 2.30rem;
    margin-bottom: 0.38rem;
    width: 0.39rem;
    height: 0.39rem;
}
</style>
