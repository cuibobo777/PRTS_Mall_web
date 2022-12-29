<template>
  <div>
    <van-nav-bar class="price_title" title="确认订单" left-arrow @click-left="onClickLeft" />
    <van-cell-group class="addcard">
      <van-cell>
        <div class="contant-icon"><van-icon size="20" name="contact"/></div>
        <div class="user-contant">
          <div v-if="status">{{orderAddress[0].detail_address}}</div>
          <div>
            <span v-if="status">{{orderAddress[0].consignee_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span v-if="status">{{orderAddress[0].consignee_phone}}</span>
          </div>
        </div>
        <div class="arrow-icon"><van-icon size="20" name="arrow" @click="onEdit" /></div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        status: false
      }
    },
    methods: {
      ...mapMutations(['SET_ORDER_ADDRESS']),
      onEdit() {
        this.$router.push({ name: 'addList' })
      },
      onClickLeft() {
        this.$router.push("/Cart")
      },
      async getOrderAddress() {
        const data = {
          params: {
            address_id: 0,
            isdefault: 1
          }
        }
        if (this.$route.query.address_id) {
          data.params.address_id = this.$route.query.address_id
        }
        this.$api.orderData.getAddress(data).then((
        { data }) => {
          // console.log(data)
          this.SET_ORDER_ADDRESS(data)
          this.status = true
        })
      }
    },
    computed: {
      ...mapState(['orderAddress'])
    },
    mounted() {
      this.getOrderAddress()
    }
  }
</script>

<style>
  .addcard .van-cell__value {
    justify-content: space-between;
    align-items: center;
  }
  .price_title {
    position: fixed;
    width: 100%;
    top: 0;
  }
  .arrow-icon,
  .contant-icon {
    width: 5%;
  }
  .user-contant {
    width: 90%;
    margin-left: 10px;
  }
  .addcard {
    margin-top: 46px;
  }
</style>
