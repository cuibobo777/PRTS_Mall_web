import axios from '../http.js'

const homeData = {
  async banner() {
    return await axios.get('home/banner/')
  },
  async grid() {
    return await axios.get('home/grid/')
  },
  async goodsGrid() {
    return await axios.get('goods/goods/')
  }
}

export default homeData
