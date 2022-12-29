<template>
  <div class="userorder">
  <useradd></useradd>
  <usergoods></usergoods>
  <price></price>
  </div>
</template>

<script>
  import useradd from "./base/useradd.vue"
  import usergoods from "./base/usergoods.vue"
  import price from "./base/price.vue"
  export default {
    components: {
      useradd,
      usergoods,
      price
    }
  }
</script>

<style>
  .userorder {
    margin: 0;
    padding: 0;
    background-color: #efefef;
    height: 100vh;
  }
  .paybar {
    bottom: 0px;
  }
</style>
