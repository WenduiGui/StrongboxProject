<template>
  <div id="add">
    <router-view/>
    <AddHeader></AddHeader>
    <AddFooter></AddFooter>
  </div>
</template>
<script>
import AddHeader from "./../components/AddHeader.vue";
import AddFooter from "./../components/AddFooter.vue";
export default {
  name: "add",
  components: {
    AddHeader,
    AddFooter
  }
};
</script>
