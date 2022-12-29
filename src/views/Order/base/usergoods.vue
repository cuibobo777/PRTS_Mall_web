<template>
  <van-cell-group inset class="info">
    <van-cell class="goods-shop">
      <p class="shop-name">PRTS&nbsp;自营</p>
    </van-cell>
    <van-cell class="order-goods" v-for="(info, index) in orderGoodsList" :key="index">
     <van-card
     :num="info.goods_count"
     :price="info.selling_price"
     :title="info.goods_name"
     :thumb="'http://127.0.0.1:8000/static/img/goods_img/' + info.goods_cover_img"
     >
     </van-card>
    </van-cell>
    <van-cell class="logistics">
      <div class="logistics_container">
        <div class="left_info">
          配送
        </div>
        <div class="right_info">
          <div class="logistics_name">
            企鹅物流
          </div>
          <div class="logistics_info">
            现货
          </div>
          <div class="logistics_date">
            {{logisticsDate}}
          </div>
        </div>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        logisticsDate: this.AddDays(-2)
      }
    },
    methods: {
      ...mapMutations(['setGoodsList']),
      AddDays(num) {
        const newdate = new Date()
        const newtimems = newdate.getTime() - (num * 24 * 60 * 60 * 1000)
        newdate.setTime(newtimems)
        const time = newdate.getFullYear() + "-" + (newdate.getMonth() + 1) + "-" + newdate.getDate()
        return time
      }
    },
    computed: {
      ...mapState(['userCart', 'orderGoodsList'])
    },
    mounted() {
      this.setGoodsList(this.$route.params.goodsIdList)
    }
  }
</script>

<style>
  .shop-name {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
  }
  .order-goods .van-cell__value {
    display: block;
  }
  .order-goods .van-cell__value .van-card {
    background-color: #fff;
  }
  .logistics,
  .logistics .van-cell__value {
    display: block;
  }
  .logistics_container,
  .right_info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .right_info {
    align-items: flex-end;
    flex-direction: column;
  }
</style>
