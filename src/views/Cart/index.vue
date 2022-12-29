<template>
  <div>
    <van-nav-bar title="购物车" />  <!-- left-arrow @click-left="onClickLeft" -->
    <div class="goods-cards">
      <van-checkbox-group ref="checkboxGroup" v-model="result" :style="show">
        <van-checkbox label-disabled v-for="(info, index) in userCart" :key="index" :name="info.goods_id_id">
          <van-swipe-cell>
            <van-card
              class="goods-card"
              :num="info.goods_count"
              :price="info.selling_price"
              :title="info.goods_name"
              :thumb="'http://127.0.0.1:8000/static/img/goods_img/' + info.goods_cover_img"
            >
              <template #footer>
                <van-button @click="updateCartItem(info,-1)" size="mini">-1</van-button>
                <van-button @click="updateCartItem(info,1)" size="mini">+1</van-button>
              </template>
            </van-card>
            <template #right>
              <van-button square @click="deleteCartItem(info)" text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <van-button class="check-all" @click="checkAll">全选</van-button>
    <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" />
    <div class="cartTip" :style="showTip">
      <p>购物车空空如也，快去逛逛吧！</p>
    </div>
    <menuBar></menuBar>
  </div>
</template>

<script>
  // import { Toast } from 'vant'
  import { mapState, mapMutations } from 'vuex'
  import menuBar from '../../components/menuBar.vue'
  export default {
    data() {
      return {
        showTip: "",
        show: "display: none",
        price: 0,
        result: [],
        clickFlag: 1
      }
    },
    components: {
      menuBar
    },
    methods: {
      ...mapMutations(['SET_USER_CART']),
      async getCartInfo(id) {
        // console.log(id)
        const url = `cart/get_cart/?id=${id}`
        this.$api.goodsToCart.getCart(url).then((
        { data }) => {
          // console.log(data)
          this.SET_USER_CART(data)
        })
      },
      async deleteCartItem(data) {
        data.goods_counts = 0
        this.$api.goodsToCart.updateCart(data).then((
        { message }) => {
          this.$router.go(0)
        }
        )
      },
      async updateCartItem(data, count) {
        if (count === -1) {
          if (data.goods_count >= 2) {
            data.goods_counts = parseInt(data.goods_count) + count
            this.$api.goodsToCart.updateCart(data).then((
            { message }) => {
              // this.$router.go(0)
              this.getCartInfo(this.userId)
            }
            )
          }
        } else {
          data.goods_counts = parseInt(data.goods_count) + count
          this.$api.goodsToCart.updateCart(data).then((
          { message }) => {
            // this.$router.go(0)
            this.getCartInfo(this.userId)
          }
          )
        }
        let totalPrice = 0
        if (this.result) {
          setTimeout(() => {
            this.result.forEach((id) => {
              const goods = this.userCart.find((item) => item.goods_id_id === id)
              const goodsPrice = parseFloat(goods.selling_price) * parseInt(goods.goods_count) * 100
              totalPrice += goodsPrice
            })
            this.price = totalPrice
          }, 50)
        }
      },
      setShow() {
          if (this.userCart) {
            this.showTip = "display: none"
            this.show = ""
        }
      },
      async checkAll() {
        if (this.clickFlag === 1) {
          this.$refs.checkboxGroup.toggleAll(true)
          this.totalPrice()
          this.clickFlag = 2
        } else if (this.clickFlag === 2) {
          this.$refs.checkboxGroup.toggleAll()
          this.clickFlag = 1
          this.totalPrice()
        }
      },
      onSubmit() {
        this.$router.push({ name: 'Order', params: { goodsIdList: this.result, price: this.price } })
      }
      },
    computed: {
      ...mapState(['userCart', 'userId'])
    },
    watch: {
      result(newresult) {
        let totalPrice = 0
        if (newresult) {
          newresult.forEach((id) => {
            const goods = this.userCart.find((item) => item.goods_id_id === id)
            const goodsPrice = parseFloat(goods.selling_price) * parseInt(goods.goods_count) * 100
            totalPrice += goodsPrice
          })
        }
        this.price = totalPrice
      }
    },
    created() {
      this.getCartInfo(this.userId)
      this.setShow()
    }
  }
</script>

<style>
  .goods-cards{
    margin-top: 12px;
    padding-bottom: 100px;
  }
  .goods-cards .van-checkbox{
    background-color: #fafafa;
    border-bottom: 1px solid #dfdfdf;
  }
  .goods-cards .van-checkbox__icon{
    width: 6%;
    justify-content: center;
    display: flex;
  }
  .goods-cards .van-checkbox__icon .van-icon::before{
    align-items: center;
  }
  .goods-cards .van-checkbox__label{
    width: 94%;
  }
  .goods-cards .van-card__header{
    padding-top: 15px;
  }
  .van-submit-bar {
    bottom: 50px;
  }
  .check-all {
    position: fixed;
    bottom: 50px;
    z-index: 999;
    border: none;
    margin-left: 6px;
  }
  .goods-card {
      margin: 0;
      background-color: @white;
      /* border-bottom: 1px solid #dfdfdf; */
    }
  .delete-button {
      height: 100%;
    }
  .cartTip {
    position: absolute;
    top: 45%;
    left: calc((100% - 224px)/2);
  }
  .cartTip>p {
    color: #555;
  }
</style>
