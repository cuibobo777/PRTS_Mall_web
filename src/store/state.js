export default {
  bannerImages: JSON.parse(localStorage.getItem('bannerImages')) || [],
  gridImages: JSON.parse(localStorage.getItem('gridImages')) || [],
  userToken: JSON.parse(localStorage.getItem('userToken')) || [],
  goodsInfo: JSON.parse(localStorage.getItem('goodsInfo')) || [],
  categoryInfo: JSON.parse(localStorage.getItem('categoryInfo')) || [],
  userId: JSON.parse(localStorage.getItem('userId')) || [],
  userCart: [],
  userAddress: JSON.parse(localStorage.getItem('userAddress')) || [],
  userDetail: JSON.parse(localStorage.getItem('userDetail')) || [],
  orderAddress: [],
  orderGoodsList: []
}
