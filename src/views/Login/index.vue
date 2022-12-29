<template>
  <div class="login_card">
    <van-nav-bar class="login_title" title="登录/注册" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="用户名/手机号"
        :rules="[{ required: true, message: '用户名不正确' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '密码格式错误' }]"
      />
      <div class="login_buttom" style="margin: 16px;">
        <van-button round type="info" color="#07c160" native-type="submit">登录</van-button>
        <van-button @click="toRegister" round type="default" color="linear-gradient(to right, #ff6034, #ee0a24)">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      ...mapMutations(['SET_USER_TOKEN', 'SET_USER_ID']),
      onSubmit(values) {
        this.getUserToken(values)
        this.toRedirect()
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      toRegister() {
        this.$router.push({ name: 'Register' })
      },
      async getUserToken(data) {
        this.$api.userLogin.login(data).then((
        { data, user_id }) => {
          this.SET_USER_TOKEN(data)
          this.SET_USER_ID(user_id)
          // console.log(user_id)
        })
      },
      authRedirect() {
        if (this.$route.query.redirect) {
          const redirectPath = this.$route.query.redirect
          // console.log(redirectPath)
          this.$router.push({ path: redirectPath })
        } else {
          this.$router.push({ name: 'Home' })
        }
      },
      toRedirect() {
        if (this.userToken) {
          Toast("登录成功，正在跳转")
          setTimeout(() => { this.authRedirect() }, 500)
        } else {
          Toast("登录失败，请重新登录")
          setTimeout(() => { this.$router.go(0) }, 500)
        }
      }
    },
    computed: {
      ...mapState(['userToken'])
    }
  }
</script>

<style>
  .van-form {
    padding: 10px;
  }
  .van-form .van-cell {
    margin-top: 20px;
  }
  .login_card .van-cell__value {
    justify-content: space-between;
  }
  .login_buttom{
    display: flex;
    justify-content: space-evenly;
  }
  .login_buttom .van-button {
    width: 40%;
  }
  .login_card .van-field--error .van-field__control {
    color: #323233;
  }
  .login_card .van-field--error .van-field__control::placeholder {
    color: #bfbfbf;
  }
</style>
