<template>
  <van-goods-action route>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
    <van-goods-action-icon replace to="/Cart" icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" @click='addGoodsToCart' />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
  import { Toast } from 'vant'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        goods: {}
      }
    },
    methods: {
      setGoods(id) {
        const arr = this.goodsInfo.find(array => array.goods_id === id)
        this.goods.selling_price = arr.selling_price
        this.goods.goods_cover_img = arr.goods_cover_img
        this.goods.goods_count = 1
        this.goods.goods_id_id = arr.goods_id
        this.goods.user_id_id = this.userId
        this.goods.goods_name = arr.goods_name
        // console.log(this.goods)
      },
       async addGoodsToCart() {
         if (!this.userToken) {
           Toast('请先登录')
           setTimeout(() => { this.$router.push('/Login') }, 500)
         } else {
             const arr = JSON.stringify(this.goods)
             this.$api.goodsToCart.addToCart(arr).then((
             { message }) => {
              Toast(message)
             })
         }
       }
    },
    computed: {
      ...mapState(['goodsInfo', 'userId', 'userToken'])
    },
    mounted() {
      this.setGoods(parseInt(this.$route.query.id))
      // console.log(this.$route.query.id)
    }
  }
</script>

<style>
</style>
