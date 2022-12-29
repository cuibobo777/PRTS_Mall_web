<template>
  <div class="goodsgrid">
  <van-grid :column-num="1" >
    <van-grid-item v-for="(info, index) in goodsGirdLeft" :key="index">
      <router-link :to="{path:'/goodsDetail', query:{id: info.goods_id}}" class="link">
        <van-image :src="'http://127.0.0.1:8000/static/img/goods_img/' + info.goods_cover_img" />
        <div class="desgoods">
          <span>{{info.goods_name}}</span>
        </div>
        <div class="price">
          <span>&yen; {{info.selling_price}}</span>
        </div>
        <div class="review">
          <span>1000+ 评论</span>
        </div>
      </router-link>
    </van-grid-item>
  </van-grid>
  <van-grid :column-num="1">
    <van-grid-item v-for="(info, index) in goodsGirdRight" :key="index">
      <router-link :to="{path:'/goodsDetail', query:{id: info.goods_id}}" class="link">
        <van-image :src="'http://127.0.0.1:8000/static/img/goods_img/' + info.goods_cover_img" />
        <div class="desgoods">
          <span>{{info.goods_name}}</span>
        </div>
        <div class="price">
          <span>&yen; {{info.selling_price}}</span>
        </div>
        <div class="review">
          <span>1000+ 评论</span>
        </div>
      </router-link>
    </van-grid-item>
  </van-grid>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        goodsGirdLeft: [],
        goodsGirdRight: []
      }
    },
    methods: {
      ...mapMutations(['SET_GOODS_INFO']),
      async getGoodsInfo() {
        this.$api.homeData.goodsGrid().then((
        { data }) => {
          // console.log(data)
          this.SET_GOODS_INFO(data)
        }
        )
      },
      async sliceList(arr) {
        const aLen = arr.length
        const len = aLen / 2
        const res = []
        for (let i = 0; i < aLen; i += len) {
          res.push(arr.slice(i, i + len))
        }
        this.goodsGirdLeft = res[0]
        this.goodsGirdRight = res[1]
        // console.log(this.goodsGirdLeft, this.goodsGirdRight)
      }
      // contentSrc(src) {
      //   console.log(src)
      //   return require("http://127.0.0.1:8000/static/img/goods_img/" + src)
      // }
    },
    computed: {
      ...mapState(['goodsInfo'])
    },
    created() {
      this.getGoodsInfo()
      this.sliceList(this.goodsInfo)
    }
  }
</script>

<style>
  .goodsgrid {
    margin-top: 10px;
    display: flex;
    padding-bottom: 50px;
  }
  .goodsgrid .van-grid-item__content {
    border-radius: 1rem;
    display: block;
    border: 4px solid #efefef;
  }
  .goodsgrid .van-hairline--top{
    display: block;
    width: 50%;
  }
  .desgoods {
    height: 3rem;
    font-size: 1.1rem;
    overflow: hidden;
  }
  .desgoods,
  .review,
  .price {
    padding: 0 0.5rem;
  }
  .link:-webkit-any-link {
    color: #000;
  }
</style>
