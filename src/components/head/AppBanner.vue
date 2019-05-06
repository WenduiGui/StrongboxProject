s<template>
    <div id="app">
        <div class="banner">
            <ul>
                <li v-for="item in banner">
                    <img class="picc"  :src="item.url" alt="">
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
                {url:require("@/assets/切图/ios/guanggao@2x.png")},
            ]
        }
    }
}
</script>

<style scoped>
.banner{
    width: 7.5rem;
    height: 3.84rem;

}
.picc{
    width: 7.5rem;
    height: 3.84rem;
    margin: 0;
    padding: 0;
}
</style>

