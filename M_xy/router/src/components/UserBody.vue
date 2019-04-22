<template>
    <div class="listdiv1">
        <ul class="listul1">
            <li class="listli1" v-for="item in list">
                <div class="list1">
                    <img class="listimg1" src="../assets/tab_associated_pre - 副本.png">
                    <span class="listspan1">{{item.num}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import fontsizeset from '../fontsizeset.js'
export default {
    data(){
        return{
            // url:"../../../切图/切图/android/drawable-xhdpi/tab_associated.png",
            list:[
                {num:"13149869439"},
                {num:"13149869440"},
                {num:"13149869441"},       
                {num:"13149869442"}
            ]
        }
    }
}
</script>

<style>
*{
    padding: 0;
    margin:0;
}
.listdiv1{
width: 7.5rem;
height: 10.2rem;
}
.listul1{
float: left;
padding-left: 0rem;
}
.listli1{
    list-style: none;
    float: left;
    width: 7.2rem;
    height: 1.42rem;
    border-bottom: 0.01rem solid #e7e7e7;
    margin-left: 0.3rem;
}
.list1{
    width: 0.9rem;
    height: 0.9rem;
    background: #9981ef;
    float: left;
    margin-top: 0.27rem;
}
.listimg1{
    width: 0.49rem;
    height: 0.44rem;
    float: left;
    margin-left: 0.18rem;
    margin-top: 0.19rem;
}
.listspan1{
    font-size: 0.25rem;
    margin-left: 1.16rem;
    margin-top: -0.35rem;
    float: left;
}
</style>


