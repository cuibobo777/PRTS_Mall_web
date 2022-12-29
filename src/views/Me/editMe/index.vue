<template>
  <div class="personal-info">
    <van-nav-bar class="edit_title" title="个人信息" left-arrow @click-left="onClickLeft" />
    <div class="user-pic">
      <van-image
        round
        fit="cover"
        width="7rem"
        height="7rem"
        :src="'http://127.0.0.1:8000/static/img/hp_img/' + userDetail[0].pic_url"
      />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="nikename"
        name="nikename"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '请输入昵称' }]"
      />
      <van-field
        readonly
        clickable
        name="sex"
        :value="sex"
        label="性别"
        placeholder="点击选择性别"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="introduce"
        rows="4"
        autosize
        type="textarea"
        maxlength="50"
        name="introduce"
        label="个人简介"
        placeholder="请描述一下自己"
        show-word-limit
        class="introduce-card"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
        return {
          nikename: '',
          sex: '',
          introduce: '',
          columns: ['男', '女', '保密'],
          showPicker: false
        }
      },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onSubmit(values) {
        console.log('submit', values)
      },
       onConfirm(value) {
        this.sex = value
        this.showPicker = false
      },
      async setBackInfo() {
        // console.log(this.userDetail[0])
        this.nikename = this.userDetail[0].nick_name
        this.sex = this.userDetail[0].sex
        this.introduce = this.userDetail[0].introduce
      }
    },
    computed: {
      ...mapState(['userDetail'])
    },
    created() {
      this.setBackInfo()
    }
  }
</script>

<style>
 .personal-info .van-field__body {
   width: 100%;
 }
 .introduce-card .van-cell__value {
   display: block;
 }
 .user-pic .van-image {
   margin-left: calc((100% - 7rem)/2);
   margin-top: 3.5rem;
   margin-bottom: 3rem;
 }
 .personal-info .van-button {
   position: fixed;
   bottom: 5%;
   width: 88%;
 }
 .personal-info .van-field__label {
   width: 5rem;
 }
 .personal-info .van-field--error .van-field__control {
   color: #323233;
 }
 .personal-info .van-field--error .van-field__control::placeholder {
   color: #bfbfbf;
 }
</style>
