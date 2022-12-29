<template>
  <div class="good-swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in goodsSwipeList" :key="index">
        <img v-lazy="'http://127.0.0.1:8000/static/img/goods_img/' + image" />
      </van-swipe-item>
    </van-swipe>
    <van-icon class="pre" name="arrow-left" @click="goback" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        goodsSwipeList: []
      }
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      setGoodsSwipeList(id) {
        // console.log(id)
        // console.log(this.goodsInfo[0].goods_id)
        const arr = this.goodsInfo.find(array => array.goods_id === id)
        this.goodsSwipeList = arr.goods_carousel.split(',')
        // console.log(this.goodsSwipeList)
      }
    },
    computed: {
      ...mapState(['goodsInfo'])
    },
    mounted() {
      this.setGoodsSwipeList(parseInt(this.$route.query.id))
      // console.log(typeof (parseInt(this.$route.query.id)))
    }
  }
</script>

<style>
  .good-swipe img {
    width: 100%;
  }
  .pre {
    position: absolute;
    left: 10px;
    top: 10px;
    /* background-color: rgba(255, 255, 255, 0.6); */
  }
</style>
