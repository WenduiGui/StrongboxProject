<template>
    <div id="app">      
        <OpenHeader></OpenHeader>
        <AppBody></AppBody>
        <Subrouter></Subrouter>
    </div>
</template>

<script>
import AppBody from "@/components/open/components/AppBody"
import OpenHeader from "@/components/open/components/OpenHeader"
import Subrouter from "@/Subrouter"
export default {
    name: 'app',
    components:{
        AppBody,
        OpenHeader,
        Subrouter
    }
    // open 开
    // detail 详情
    // status 状态
    // insertBox
    // login 登陆
}
</script>