<template>
    <div id="app">
        <div class="footer">
            <router-link to="/Strongbox"><span class="sp5">{{sp5}}</span></router-link>
        </div>
    </div>
</template>
<script>
import {fontsizeset} from "@/fontsizeset.js"
export default {
    name:"app",
    data(){
        return{
            sp5:"监听保险箱"
        }
    }
}
</script>
<style scoped>
.footer{
    width: 7.5rem;
    height: 1.3rem;
    background-color: #0092ff;
}
.sp5{
    color:white;
    font-size: 30px;
    float: left;
    margin-left: 2.5rem;
    margin-top: 0.3rem;
}
</style>

