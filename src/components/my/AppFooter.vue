<template>
    <div class="AppFooterbox">
       <div class="AppFooterbox2">
           <router-link to="/SafebL">
               <span class="AppFooterspan">{{span}}</span>
           </router-link>
        <!-- <router-link to="/"></router-link> -->
           
       </div>
    </div>
</template>

<script>
import fontsizeset from '@/fontsizeset.js'
export default {
     name:"AppFooterbox",
    data(){
        return{
            span:"退出登录"
        }
    }
    
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
.AppFooterbox{
    width: 7.5rem;
    height: 3.95rem;
    background: #f5f5f7;
}
.AppFooterbox2{
    width: 7.5rem;
    height: 1.1rem;
    background: white;
    border-bottom: 1px solid #d8d8d8;
    border-top: 1px solid #d8d8d8;
    float: left;
    margin-top: 0.24rem;
}
.AppFooterspan{
    width: 7.5rem;
    height: 1.1rem;
    color: red;
    font-size: 0.28rem;
    text-align: center;
    float: left;
    line-height: 1.1rem;
}
</style>


