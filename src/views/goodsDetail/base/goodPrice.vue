<template>
  <van-cell-group inset class="info">
    <van-cell class="good-price">
      <div class="sign">&yen;
        <span class="num">{{price}}</span>
      </div>
    </van-cell>
    <van-cell class="good-note">
      <span>{{note}}</span>
    </van-cell>
  </van-cell-group>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        price: '',
        note: ''
      }
    },
    methods: {
      setGoodsSwipeList(id) {
        // console.log(id)
        // console.log(this.goodsInfo[0].goods_id)
        const arr = this.goodsInfo.find(array => array.goods_id === id)
        this.price = arr.selling_price
        this.note = arr.goods_name
        // console.log(this.goodsSwipeList)
      }
    },
    computed: {
      ...mapState(['goodsInfo'])
      // setData() {
      //   return (this.price, this.note)
      // }
    },
    mounted() {
      this.setGoodsSwipeList(parseInt(this.$route.query.id))
      // console.log(this.$route.query.id)
    }
  }
</script>

<style>
  .info {
    padding: 10px 8px 10px 8px;
    margin: 8px 4px 0px 4px;
  }
  .good-price,
  .good-note {
    padding: 6px 8px 6px 8px;
  }
  .num {
    color: #f33;
    font-size: 24px;
    font-weight: 700;
  }
  .sign {
    color: #f33;
    font-size: 12px;
    font-weight: 400;
  }
  .info>.van-cell::after {
    border: none;
  }
  .good-note {
    font-size: 16px;
    font-weight: 700;
  }
</style>
