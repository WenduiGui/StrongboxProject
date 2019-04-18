<template>
    <div id="app">
        <PasswordHeader></PasswordHeader>
        <PasswordBody></PasswordBody>
    </div>
</template>

<script>
import PasswordHeader from '@/components/password/PasswordHeader'
import PasswordBody from '@/components/password/PasswordBody'
export default {
    name:"app",
    components:{
        PasswordHeader,
        PasswordBody
    }
}
</script>
