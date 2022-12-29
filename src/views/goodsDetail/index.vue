<template>
  <div class="goods-detail">
    <div class="goods-info">
    <goodswipe></goodswipe>
    <good-price></good-price>
    <goods-choese></goods-choese>
    <goodetail></goodetail>
    </div>
    <goods-action></goods-action>
  </div>
</template>

<script>
  import goodsAction from './base/goodsAction.vue'
  import goodswipe from './base/goodswipe.vue'
  import goodPrice from './base/goodPrice.vue'
  import goodsChoese from './base/goodsChoese.vue'
  import goodetail from './base/goodetail.vue'
  export default {
    components: {
      goodsAction,
      goodswipe,
      goodPrice,
      goodsChoese,
      goodetail
    }
  }
</script>

<style>
  .goods-detail {
    margin: 0;
    padding: 0;
    background-color: #efefef;
    padding-bottom: 50px;
  }
</style>
