<template>
  <div class="cate">
    <van-nav-bar class="ctitle" title="商品分类" />
    <van-sidebar v-model="activeKey" id="sidebar">
      <van-sidebar-item v-for="(name, index) in categoryInfo" :key="index" @click="changeList(name.Category_id)" :title="name.Category_name" />
    </van-sidebar>
    <div class="com">
      <van-grid :border='false' :column-num="3">
        <van-grid-item v-for="(info, index) in goods_list" :key="index">
          <router-link :to="{path:'/goodsDetail', query:{id: info.goods_id}}" class="link">
          <van-image :src="'http://127.0.0.1:8000/static/img/goods_img/' + info.goods_cover_img" />
          </router-link>
        </van-grid-item>
      </van-grid>
    </div>
    <menuBar></menuBar>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import menuBar from '../../components/menuBar.vue'
  export default {
    data() {
      return {
        activeKey: 0,
        goods_list: []
      }
    },
    methods: {
      ...mapMutations(['SET_CATEGORY_INFO']),
      async getGategoryInfo() {
        this.$api.categoryData.category().then((
        { data }) => {
          // console.log(data)
          this.SET_CATEGORY_INFO(data)
          // console.log(data[0].Category_id)
        }
        )
      },
      changeList(categoryId = this.categoryInfo[0].Category_id) {
        this.goods_list = this.goodsInfo.filter(item => item.goods_category_id_id === categoryId)
        // console.log(this.goods_list)
      }
    },
    components: {
      menuBar
    },
    computed: {
      ...mapState(['categoryInfo', 'goodsInfo'])
    },
    mounted() {
      this.getGategoryInfo()
      this.changeList()
    }
  }
</script>

<style>
 .cate{
   margin: 0;
   padding: 0;
    /* display: inline-block;
    overflow: hidden; */
    /* display: flex; */
  }
  #sidebar{
    display: inline-block;
    padding-bottom: 50px;
    height: 100%;
    position: fixed;
    overflow: scroll;
    margin-top: 46px;
    background-color: #f7f8fa;
  }
  .com {
    display: inline-block;
    margin: 20px 0px 0px 80px;
    height: 100%;
    padding: 10px;
    /* position: fixed; */
    overflow: auto;
    margin-top: 4rem;
  }
  .ctitle {
    top: 0px;
    position: fixed;
    width: 100%;
    display: block;
  }
</style>
