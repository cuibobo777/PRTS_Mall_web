<template>
  <div class="eidt_address">
    <van-nav-bar class="edit_title" :title="title" left-arrow @click-left="onClickLeft" />
    <van-address-edit
     :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      :address-info="{
              name: info.consignee_name,
              tel: info.consignee_phone,
              addressDetail: info.detail_address,
              areaCode: info.area_code,
              isDefault: info.default_flag,
            }"
    />
  </div>
</template>

<script>
  import { areaList } from '@vant/area-data'
  import { Toast } from 'vant'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        areaList,
        title: this.$route.query.title,
        info: []
      }
    },
    methods: {
      async onSave(content) {
        if (this.info.address_id) {
          content.address_id = this.info.address_id
          content.user_id = this.userId
          this.$api.userLogin.addAddress(content).then((
          { message }) => {
            Toast(message)
            setTimeout(() => {
              this.$router.push("/Me/addList")
            })
          })
        }
      },
      onDelete() {
        Toast('delete')
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      async setInfoList() {
        if (this.userAddres !== []) {
          this.info = this.userAddress.find(item => item.address_id === this.$route.query.id)
          if (this.info.default_flag === 1) {
            this.info.default_flag = true
          } else {
            this.info.default_flag = false
          }
          this.info.area_code = this.info.area_code.toString()
          // console.log(this.info.area_code)
          console.log(this.info)
        }
      }
    },
    computed: {
      ...mapState(['userId', 'userAddress'])
    },
    mounted() {
      this.setInfoList()
    }
  }
</script>

<style>
</style>
