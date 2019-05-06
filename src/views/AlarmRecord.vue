<template>
    <div id="app">      
        <RecordHeader></RecordHeader>
        <AppContainer></AppContainer>
        <Subrouter></Subrouter>
    </div>
</template>

<script>
import RecordHeader from "@/components/record/RecordHeader"
import AppContainer from "@/components/record/AppContainer"
import Subrouter from "@/Subrouter"
export default {
    name: 'app',
    components:{
        RecordHeader,
        AppContainer,
        Subrouter
    }
    // open 开
    // detail 详情
    // status 状态
    // insertBox
    // login 登陆
}
</script>