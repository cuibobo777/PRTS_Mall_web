<template>
  <div class="register_card">
    <van-nav-bar class="register_title" title="登录/注册" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit" class="register_form">
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
      <van-field
        v-model="repassword"
        type="password"
        name="repassword"
        placeholder="请再次输入密码"
        :rules="[{ validator, message: '两次密码不一致' }]"
      />
      <van-field
        v-model="email"
        type="email"
        name="email"
        placeholder="请输入邮箱"
        :rules="[{ pattern, message: '邮箱格式错误' }]"
      />
      <div class="register_buttom" style="margin: 16px;">
        <van-button round block type="info" color="#07c160" native-type="submit">提交注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  export default {
    data() {
      return {
        username: '',
        password: '',
        repassword: '',
        email: '',
        msg: '',
        pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      }
    },
    methods: {
      onSubmit(values) {
        // console.log('submit', values)
        this.userRegister(values)
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      validator(val) {
        if (this.password === val) {
          return true
        } else {
          return false
        }
      },
      async userRegister(data) {
        this.$api.userLogin.register(data).then((
        { message }) => {
          // console.log(message)
          this.msg = message
          Toast(this.msg)
          this.$router.push("/Login")
        })
      }
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
  .register_buttom{
    display: flex;
    justify-content: space-evenly;
  }
  .register_buttom .van-button {
    width: 80%;
  }
  .register_form .van-cell__value {
    justify-content: space-between;
  }
  .register_card .van-field--error .van-field__control {
    color: #323233;
  }
  .register_card .van-field--error .van-field__control::placeholder {
    color: #bfbfbf;
  }
</style>
