import {
  SET_BANNER_IMAGES,
  SET_GRID_IMAGES,
  SET_USER_TOKEN,
  SET_GOODS_INFO,
  SET_CATEGORY_INFO,
  SET_USER_ID,
  SET_USER_CART,
  SET_USER_ADDRESS,
  SET_USER_DETAIL,
  SET_ORDER_ADDRESS
} from './types.js'
export default {
  [SET_BANNER_IMAGES](state, images) {
    state.bannerImages = images
    localStorage.setItem('bannerImages', JSON.stringify(images))
  },
  [SET_GRID_IMAGES](state, images) {
    state.gridImages = images
    localStorage.setItem('gridImages', JSON.stringify(images))
  },
  [SET_USER_TOKEN](state, token) {
    state.userToken = token
    localStorage.setItem('userToken', JSON.stringify(token))
  },
  [SET_USER_ID](state, id) {
    state.userId = id
    localStorage.setItem('userId', JSON.stringify(id))
  },
  [SET_GOODS_INFO](state, info) {
    state.goodsInfo = info
    localStorage.setItem('goodsInfo', JSON.stringify(info))
  },
  [SET_CATEGORY_INFO](state, info) {
    state.categoryInfo = info
    localStorage.setItem('categoryInfo', JSON.stringify(info))
  },
  [SET_USER_CART](state, info) {
    state.userCart = info
    // localStorage.setItem('categoryInfo', JSON.stringify(info))
  },
  [SET_USER_ADDRESS](state, info) {
    state.userAddress = info
    localStorage.setItem('userAddress', JSON.stringify(info))
  },
  [SET_ORDER_ADDRESS](state, info) {
    state.orderAddress = info
    // localStorage.setItem('orderAddress', JSON.stringify(info))
  },
  [SET_USER_DETAIL](state, info) {
    state.userDetail = info
    localStorage.setItem('userDetail', JSON.stringify(info))
  },
  async setGoodsList(state, list) {
    const l = []
    if (list) {
      list.forEach((id) => {
        const info = state.userCart.find(item => item.goods_id_id === id)
        l.push(info)
      })
      state.orderGoodsList = l
    }
    // console.log(this.goodsList)
  }
}
