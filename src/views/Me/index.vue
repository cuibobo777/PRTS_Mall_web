<template>
  <div class="me">
      <van-icon class="settings" size="20px" name="setting-o" @click="showPopup"/>
      <van-popup position="right" round :style="{ width: '60%', height: '100%' }" v-model="show"  closeable close-icon="close">
        <div class="settings-buttom">
          <van-button class="toEdit" @click="userEdit" block round type="primary">修改个人信息</van-button>
          <van-button class="logout" @click="userLogout" block round type="danger">退出登录</van-button>
        </div>
      </van-popup>
    <div class="ucon">
      <van-image round width="60px" height="60px" :src="'http://127.0.0.1:8000/static/img/hp_img/' + userDetail[0].pic_url" />
      <div class="udst">
      <span class="uname">{{userDetail[0].nick_name}}</span>
      <span class="ucoin">{{userDetail[0].introduce}}</span>
      </div>
    </div>
    <van-cell-group inset class="ord">
      <van-cell class="collect">
        <span>商品收藏</span>
        <span>店铺收藏</span>
        <span>我的足迹</span>
      </van-cell>
      <van-cell class='status'>
        <div><van-icon name="peer-pay" size="40" /><span>待付款</span></div>
        <div><van-icon name="send-gift-o" size="40" /><span>待收货</span></div>
        <div><van-icon name="after-sale" size="40" /><span>退换/售后</span></div>
        <div><van-icon name="todo-list-o" size="40" /><span>全部订单</span></div>
      </van-cell>
      <van-cell>
        <van-cell-group inset>
         <van-cell style="background-color: #eee;">
           <van-image width="50" height="50" radius="4" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
           <div class="gooddst">
             <div>
              <span class="goodstatus">配送中</span>
              <span class="date">2022-12-02 06:48:47</span>
             </div>
             <span class="goodsdel">[黑河市]黑龙江孙吴县公司[0456-6899053] 快递员 刘雪松（17804560879） 正在为您派件。疫情期间快递各环节已消杀，快递小哥48小时核酸正常，今日测温正常，将佩戴口罩为您派送，您也可联系小哥将快件放置指定代收点或快递柜（温馨提示您：戴口罩取快递，个人防护要牢记），【95121为韵达业务员外呼专属号码，请放心接听】</span>
          </div>
         </van-cell>
        </van-cell-group>
      </van-cell>
    </van-cell-group>
    <van-cell-group inset>
      <van-cell class="urights">
        <div>
          <span id="unum"><span>&yen;</span>&nbsp;0.0</span>
          <span id="udetail">红包</span>
        </div>
        <div>
          <span id="unum">3&nbsp;<span>张</span></span>
          <span id="udetail">优惠劵</span>
        </div>
        <div>
          <span id="unum">{{userDetail[0].PRTS_num}}</span>
          <span id="udetail">信用点数</span>
        </div>
        <div>
          <span id="unum">{{userDetail[0].furniture_num}}</span>
          <span id="udetail">家具币</span>
        </div>
      </van-cell>
    </van-cell-group>
    <menuBar></menuBar>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import menuBar from '../../components/menuBar.vue'
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      ...mapMutations(['SET_USER_DETAIL']),
      showPopup() {
        this.show = true
      },
      userLogout() {
        localStorage.removeItem('userToken', 'userId', 'userAddress')
        this.$router.push({
        path: '/Login',
        query: { redirect: "/Me" }
        })
      },
      userEdit() {
        this.$router.push({
        path: '/Me/editMe'
        // query: { redirect: "/Me" }
        })
      },
      async getUserDetailInfo(id) {
        // console.log(id)
        const url = `me/get_user_detail/?id=${id}`
        this.$api.userLogin.getUserDetail(url).then((
        { data }) => {
          // console.log(data)
          this.SET_USER_DETAIL(data)
        })
      }
    },
    computed: {
      ...mapState(['userId', 'userDetail'])
    },
    components: {
      menuBar
    },
    mounted() {
      this.getUserDetailInfo(this.userId)
    }
  }
</script>

<style>
  .me {
    margin: 0;
    padding: 0;
    background-color: #efefef;
    height: 100vh;
  }
  .settings {
    position: absolute;
    top: 3.3rem;
    right: 3rem;
  }
  .settings-buttom {
    position: absolute;
    bottom: 5%;
    width: 85%;
    margin-left: 7.5%;
  }
  .toEdit {
  }
  .logout {
    margin-top: 1rem;
  }
  .ucon {
    display: flex;
    padding: 40px 0px 30px 30px;
    /* background-color: rgba(62, 224, 208, 0.8); */
  }
  .udst {
    /* display: flex; */
  }
  .uname {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 15px;
    line-height: 2rem;
  }
  .ucoin {
    display: block;
    color: #666;
    font-size: 0.5rem;
    font-weight: 400;
    margin-left: 15px;
    margin-top: 0.5rem;
  }
  .collect {
    display: flex;
  }
  .van-cell-group--inset {
    margin: 0 8px;
  }
  .collect span {
    display: inline-block;
    width: calc(33.333%);
    text-align: center;
  }
  .van-cell__value {
    display: flex;
  }
  .status div {
    width: 25%;
    text-align: center;
  }
  .status div>span {
    display: block;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
  }
  .van-icon {
    display: block;
  }
  .ord {
    margin-bottom: 8px;
  }
  .gooddst{
    width: calc(100% - 50px);
    overflow: hidden;
  }
  .date {
    margin-left: 15px;
    font-size: 12px;
    font-weight: 400;
  }
  .goodstatus {
    font-size: 15px;
    font-weight: 700;
    margin-left: 15px;
    line-height: 30px;
  }
  .goodsdel {
    display: block;
    color: #666;
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .urights div {
    width: 25%;
    text-align: center;
  }
  .urights div>#udetail,
  .urights div>#unum {
    display: block;
    margin-top: 8px;
  }
  #unum {
    font-size: 18px;
    font-weight: 700;
  }
  #udetail {
    font-size: 13px;
  }
  #unum>span {
    font-size: 13px;
    font-weight: 400;
  }
</style>
