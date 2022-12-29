<template>
  <div class="home">
    <swipe></swipe>
    <grid></grid>
    <acgrid></acgrid>
    <goods-grid></goods-grid>
    <menuBar></menuBar>
  </div>
</template>

<script>
  import menuBar from '../../components/menuBar.vue'
  import swipe from './base/swipe.vue'
  import grid from './base/grid.vue'
  import acgrid from './base/acgrid.vue'
  import goodsGrid from './base/goodsGrid.vue'
  export default {
    components: {
      menuBar,
      swipe,
      grid,
      acgrid,
      goodsGrid
    }
  }
</script>

<style>
  .home {
    background-color: #efefef;
  }
  goods-grid {
    padding-bottom: 50px;
  }
</style>
