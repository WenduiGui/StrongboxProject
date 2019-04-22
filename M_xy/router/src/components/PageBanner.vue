s<template>
    <div id="app">
        <div class="banner">
            <ul>
                <li v-for="item in banner">
                    <img  :src="item.url" alt="" class="i1">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { request } from 'http';
export default {
    name:"app",
    data(){
        return{
            banner:[
                {url:require("./../assets/切图/ios/guanggao@2x.png")},
            ]
        }
    }
}
</script>

<style>
.banner{
    width: 7.5rem;
    height: 3.84rem;

}
.i1{
    height: 3.8rem;
    width: 7.5rem;
}
</style>

