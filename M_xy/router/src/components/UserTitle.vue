<template>
    <div class="box1">
      <span class="span1">{{span1}}</span>
      <img class="img3" src="../assets/addx.png" alt="">
    </div>
</template>

<script>
import fontsizeset from '../fontsizeset.js'
export default {
    data(){
        return{
            span1:"保险箱将按此顺序拨号，拖动可排序"
        }
    }
}
</script>

<style>
*{
    padding: 0;
    margin:0;
}
    .box1{
        width: 7.5rem;
        height: 0.87rem;
        border-bottom:1px solid #ebcf9f; 
        background-color: #f7ebbb;
    }
    .span1{
        font-size: 0.27rem;
        margin-top: 0.29rem;
        margin-left: 0.29rem;
        float: left;
    }
    .img3{
        margin-left: 2.13rem;
        margin-bottom:0.38rem;
        width: 0.39rem;
        height: 0.39rem;
    }
</style>


