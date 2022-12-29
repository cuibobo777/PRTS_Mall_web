<template>
  <div>
    <van-cell-group inset class="orderprice">
      <van-cell class="goods-price">
        <div class="left">
          商品金额
        </div>
        <div class="right">
          &yen;{{totalPrice}}
        </div>
      </van-cell>
      <van-cell>
        <div class="left">
          运费
        </div>
        <div class="right">
          &yen;0.00
        </div>
      </van-cell>
      <van-cell>
        <div class="left">
          优惠卷
        </div>
        <div class="right">
          无可用
        </div>
      </van-cell>
      <van-cell>
        <div class="left">
          礼品卡
        </div>
        <div class="right">
          无可用
        </div>
      </van-cell>
      <van-cell class="total_card">
        <div class="total_price"><span>合计:</span>&yen;{{totalPrice}}</div>
      </van-cell>
    </van-cell-group>
    <van-submit-bar class="paybar"  :price="this.$route.params.price" button-text="提交订单"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        totalPrice: this.setTotalPrice()
      }
    },
    methods: {
      setTotalPrice() {
        const p = this.$route.params.price / 100
        return p.toFixed(2)
      }
    }
  }
</script>

<style>
  .orderprice {
    padding: 10px 8px 10px 8px;
    margin: 8px 4px 0px 4px;
  }
  .orderprice .van-cell .van-cell__value {
    justify-content: space-between;
  }
  .orderprice>.van-cell::after {
      border: none;
  }
  .orderprice .total_card .van-cell__value {
    justify-content: flex-end;
  }
  .orderprice .total_card::before {
    border: 1px solid #efefef;
  }
</style>
