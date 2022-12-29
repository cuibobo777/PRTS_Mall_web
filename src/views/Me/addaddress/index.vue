<template>
  <div class="eidt_address">
    <van-nav-bar class="edit_title" :title="title" left-arrow @click-left="onClickLeft" />
    <van-address-edit
     :area-list="areaList"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
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
        content.user_id = this.userId
        this.$api.userLogin.addAddress(content).then((
        { message }) => {
          Toast(message)
          setTimeout(() => {
            this.$router.push("/Me/addList")
          }, 500)
        })
      },
      onDelete() {
        Toast('delete')
      },
      onClickLeft() {
        this.$router.go(-1)
      }
    },
    computed: {
      ...mapState(['userId'])
    },
    mounted() {
    }
  }
</script>

<style>
</style>
