<template>
    <div id="app1">
        <div class="header">
        <router-link to="/ReturnS">
            <span class="sp1">{{sp1}}</span>
        </router-link>
            <span class="sp2">{{sp2}}</span>
        </div>
    </div>
</template>

<script>
import { fontsizeset } from '@/fontsizeset'
export default {
    data(){
        return{
            sp1:"<",
            sp2:"米克保险箱"
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    #app1 .header{
        width: 7.5rem;
        height: 0.88rem;
        background-color: black;
    }
    .header .sp1{
        color: white;
        float: left;
        font-size: 35px;
        margin-left: 0.3rem;
    }
        .header .sp2{
        color: white;
        float: left;
        font-size: 22px;
        margin-left: 2.2rem;
        margin-top: 0.15rem;
    }
</style>

