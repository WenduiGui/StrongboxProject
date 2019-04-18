<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppBody></AppBody>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppBody from './components/AppBody.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppBody,
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
