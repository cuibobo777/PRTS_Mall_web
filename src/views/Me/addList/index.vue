<template>
  <div>
    <van-nav-bar class="address_title" title="我的地址" left-arrow @click-left="onClickLeft" />
    <van-address-list
      class="choose_address"
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
  // import { Toast } from 'vant'
  import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        chosenAddressId: '1',
        list: []
      }
    },
    methods: {
      ...mapMutations(['SET_USER_ADDRESS']),
      onAdd() {
        this.$router.push({ path: '/Me/addaddress', query: { title: '新增地址' } })
      },
      onEdit(item, index) {
        const id = this.list[index].id
        // console.log(id)
        this.$router.push({ path: '/Me/editaddress', query: { title: '编辑地址', id: id } })
      },
      onClickLeft() {
        this.$router.push("/Order")
      },
      async getUserAddrss(id) {
        // console.log(id)
        const url = `login/get_address/?id=${id}`
        this.$api.userLogin.getAddress(url).then((
        { data }) => {
          // console.log(data)
          this.SET_USER_ADDRESS(data)
        })
      },
      async setList() {
        if (this.userAddress !== []) {
          this.chosenAddressId = this.userAddress[0].address_id
          this.userAddress.forEach((item) => {
            if (item.default_flag === 1) {
              this.list.push({
                id: item.address_id,
                name: item.consignee_name,
                tel: item.consignee_phone,
                address: item.province_name + item.city_name + item.region_name + item.detail_address,
                isDefault: true
              })
            } else {
              this.list.push({
                id: item.address_id,
                name: item.consignee_name,
                tel: item.consignee_phone,
                address: item.province_name + item.city_name + item.region_name + item.detail_address
              })
            }
          })
        }
      },
      onSelect() {
        setTimeout(() => {
          // console.log(this.chosenAddressId)
          this.$router.push({ path: '/Order', query: { address_id: this.chosenAddressId } })
        }, 10)
      }
    },
    computed: {
      ...mapState(['userId', 'userAddress'])
    },
    created() {
      this.getUserAddrss(this.userId)
      setTimeout(() => {
        this.setList()
      }, 10)
    }
  }
</script>

<style>
  .address_title {
    position: fixed;
    width: 100%;
  }
  .choose_address .van-radio-group {
    margin-top: 46px;
  }
</style>
