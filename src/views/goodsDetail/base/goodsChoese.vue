<template>
  <van-cell-group inset class="goods-choose" >
    <van-cell>
      <div class="sku_choose_info" @click="show = !show">
        <h3>已选</h3>
        <span id="skuChoose1">数字版 限定版手柄套装，限定版，1个</span>
      </div>
        <van-sku
            v-model="show"
            :sku="skuData.sku"
            :goods="skuData.goods_info"
            :goods-id="skuData.goods_id"
            :quota="skuData.quota"
            :quota-used="skuData.quota_used"
            :hide-stock="skuData.sku.hide_stock"
            :initial-sku="skuData.initialSku"
            @buy-clicked="onBuyClicked"
            @stepper-change="stepperChanged"
            @add-cart="onAddCartClicked"
            @sku-selected="onSkuSelected"
        />
    </van-cell>
    <van-cell>
      <div class="detail_transfer">
        <h3 class="detail_transfer_row_tit">送至</h3>
      </div>
      <div class="detail_transfer_row_content">
        <p class="detail_transfer_row_content_oline" id="addrName">北京朝阳区三环到四环之间</p>
        <p id="postTip">现在至明天23:00前下单，预计<b>12月09日(周五)</b>送达， 受防疫举措变化影响，配送时效可能会有延长。我们将增加物资供应与人员安排，尽快为您送达，感谢您的理解与支持！</p>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {
  // name: "Correlation",
  data() {
    return {
      ids: "",
      current: 0,
      address: "北京市 昌平区 回龙观",
      imglist: [
        // { url: require("../assets/img/11pro2.png") },
        // { url: require("../assets/img/11pro3.png") },
        // { url: require("../assets/img/11pro4.png") },
        // { url: require("../assets/img/11pro5.png") },
        // { url: require("../assets/img/11pro6.png") },
        // { url: require("../assets/img/11pro7.png") },
        // { url: require("../assets/img/11pro8.png") }
      ],
      show: false,
      specification: "", // 选中的产品规格值
      product_number: 1, //  选中的产品数量
      skuData: {
        sku: {
          // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
          // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          tree: [
            {
              k: "颜色", // skuKeyName：规格类目名称
              k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              v: [
                {
                  id: "1", // skuValueId：规格值 id
                  name: "黑色", // skuValueName：规格值名称
                  imgUrl:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2237d83d46b43a7dca0b5fb6db2a9700.png", // 规格类目图片，只有第一个规格类目可以定义图片
                  previewImgUrl:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2237d83d46b43a7dca0b5fb6db2a9700.png" // 用于预览显示的规格类目图片
                },
                {
                  id: "2",
                  name: "紫色",
                  imgUrl:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3a36269683536a9d46a044392ed37ab.png",
                  previewImgUrl:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3a36269683536a9d46a044392ed37ab.png"
                }
              ],
              largeImageMode: true //  是否展示大图模式
            },
            {
              k: "尺寸",
              k_s: "s2",
              v: [
                {
                  id: "3",
                  name: "8GB+256GB"
                },
                {
                  id: "4",
                  name: "12GB+256GB"
                }
              ]
            }
          ],
          // 所有 sku 的组合列表，如下是：黑色8GB+256GB、黑色12GB+256GB、紫色8GB+256GB、紫色12GB+256GB
          list: [
            {
              id: 2257, // skuId
              s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
              s2: "3", // 规格类目 k_s 为 s2 的对应规格值 id
              price: 479900, // 价格（单位分）
              stock_num: 110, // 当前 sku 商品对应的库存
              name: "黑色 8GB+256GB" // 当前 sku 商品对应的规格值
            },
            {
              id: 2258,
              s1: "1",
              s2: "4",
              price: 519900,
              stock_num: 110,
              name: "黑色 12GB+256GB"
            },
            {
              id: 2259,
              s1: "2",
              s2: "3",
              price: 479900,
              stock_num: 110,
              name: "紫色 8GB+256GB"
            },
            {
              id: 2260,
              s1: "2",
              s2: "4",
              price: 519900,
              stock_num: 110,
              name: "紫色 12GB+256GB"
            }
          ],
          price: "5499.00", // 默认价格（单位元）
          stock_num: 440, // 商品总库存
          none_sku: false, // 是否无规格商品
          hide_stock: false // 是否隐藏剩余库存
        },
        goods_id: "0927",
        quota: 3, // 限购数量
        quota_used: 0, // 已经购买过的数量
        goods_info: {
          // 默认商品 sku 缩略图
          picture:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df0a551e12d611cd9ed91917cfb047d.jpg"
        },
        initialSku: {
          s1: "1",
          s2: "3",
          selectedNum: 1
        }
      }
    }
  },
  mounted() {
    this.ids = this.$route.params.id ? this.$route.params.id : "01"
    console.log(this.ids)
  },
  methods: {
    onChange(index) {
      this.current = index
      // console.log(index)
    },
    Selected() {
      this.show = !this.show
    },
    reBack() {
      this.$router.back()
    },
    onSkuSelected(data) {
      // 更改商品属性时触发
      console.log(data)
      this.specification = data.selectedSkuComb.name
    },
    stepperChanged(data) {
      // 更改商品数量时触发
      console.log(data)
      this.product_number = data
    },
    onBuyClicked(data) {
      // 立即购买时触发
      this.$toast(
        "buy:" + (data.selectedNum * data.selectedSkuComb.price) / 100
      )
      console.log(data)
    },
    onAddCartClicked(data) {
      // 加入购物车时触发
      this.$toast("add cart")
    }
  }
}
</script>

<style>
  .goods-choose {
    padding: 10px 8px 10px 8px;
    margin: 8px 4px 0px 4px;
  }
  .sku_choose_info {
    display: flex;
  }
  #skuChoose1 {
    margin: 0px 0px 0px 10px;
    padding: 17px 0;
  }
  .detail_transfer_row_content{
    margin: 0px 0px 0px 10px;
  }
  .detail_transfer_row_content>p {
    margin: 0;
  }
  #addrName {
    padding: 17px 0px 0px 0px ;
  }
  .detail_transfer_row_tit {
    width: 32.75px;
  }
  #postTip {
    font-size: 12px;
    color: #666;
  }
</style>
