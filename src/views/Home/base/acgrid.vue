<template>
  <div class="acgrid">
    <span class="tuijian">可露希尔推荐</span>
    <van-grid :border='false' :column-num="5">
      <van-grid-item v-for="(image, index) in acList" :key="index">
        <router-link :to="{path:'/goodsDetail', query:{id: JSON.stringify(image.goods_id)}}" class="link">
          <van-image :src="'http://127.0.0.1:8000/static/img/goods_img/' + image.goods_cover_img" />
          <span class="ac_price">&yen;{{image.selling_price}}</span>
        </router-link>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        acList: []
      }
    },
    methods: {
      async getAcList() {
        // console.log(this.goodsInfo)
        this.acList = this.goodsInfo.filter(item => item.goods_promotion_status === 1)
        // console.log(this.acList)
      }
    },
    computed: {
      ...mapState(['goodsInfo'])
    },
    created() {
      setTimeout(() => { this.getAcList() }, 10)
      // this.getAcList()
    }
  }
</script>

<style>
   .acgrid {
     margin: 10px 4px 10px 4px;
     padding: 0 0.5rem;
     background-color: #fff;
     border-radius: 0.6rem;
   }
   .tuijian {
     font-size: 0.8rem;
     position: relative;
     display: block;
     height: 1.5rem;
     line-height: 2rem;
     margin-left: 0.8rem;
   }
   .colon {
      display: inline-block;
      margin: 0 4px;
      color: #ee0a24;
    }
    .block {
      display: inline-block;
      width: 22px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #ee0a24;
    }
    .ac_price {
      font-size: 0.8rem;
      font-weight: 700;
      color: rgba(231, 43, 53, 0.7);
    }
</style>
