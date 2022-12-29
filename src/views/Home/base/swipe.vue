<template>
  <div class="swiper-wrapper">
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in bannerImages" :key="index">
      <img v-lazy="image.carousel_url" />
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    methods: {
      ...mapMutations(['SET_BANNER_IMAGES']),
      async getBannerImages() {
        this.$api.homeData.banner().then((
        { data }) => {
          // console.log(data)
          this.SET_BANNER_IMAGES(data)
        }
        )
      }
    },
    computed: {
      ...mapState(['bannerImages'])
    },
    created() {
      this.getBannerImages()
    }
  }
</script>

<style>
  .swiper-wrapper img {
    width: 100%;
    border-radius: 1rem;
  }
</style>
