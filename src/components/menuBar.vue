<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/Category" icon="apps-o" dot>分类</van-tabbar-item>
    <van-tabbar-item replace to="/Cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/Me" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        // active: 0
      }
    }
    // methods: {
    //   changeBar(id) {
    //     this.active = id
    //   }
    // }
  }
</script>

<style>
</style>
