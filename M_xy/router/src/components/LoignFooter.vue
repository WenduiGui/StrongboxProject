<template>
    <div id="LoignFooter">
        <router-link to="/">
        <p class="Out">{{Sign_out}}</p>
        </router-link>
    </div>
</template>

<script>

export default {
    name:"LoignFooter",
    data(){
        return{
            Sign_out:"退出登陆",
        }
    }
}
</script>

<style>
#LoignFooter{
    background-color: #ffffff;
    border-bottom: 1px solid #d9d9db;
    border-top: 1px solid #d9d9db;
    box-sizing: border-box;
    width: 7.5rem;
    height: 1.11rem;
    margin-top:0.25rem ;
}
a{
    text-decoration: none;
    
}
.Out{
    color:red;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1.11rem;
}
</style>

