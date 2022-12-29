<template>
  <div>
  <van-grid :column-num="4" class='grid'>
    <!-- <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" /> -->
    <van-grid-item v-for="(image, index) in gridImages" :key="index" >
      <van-image :src="image.grid_url" />
      <div><span>{{image.grid_sort}}</span></div>
    </van-grid-item>
  </van-grid>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['SET_GRID_IMAGES']),
      async getGridImages() {
        this.$api.homeData.grid().then(({
          data
        }) => {
          // console.log(data)
          this.SET_GRID_IMAGES(data)
        })
      }
    },
    computed: {
      ...mapState(['gridImages'])
    },
    mounted() {
      this.getGridImages()
    }
  }
</script>

<style>
  .grid {
    font-size: 13px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
