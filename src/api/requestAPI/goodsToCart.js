import axios from '../http.js'

const goodsToCart = {
  async addToCart(data) {
    return await axios.post('cart/to_cart/', data)
  },
  async getCart(url) {
    return await axios.get(url)
  },
  async updateCart(data) {
    return await axios.put('cart/update_cart/', data)
  }
}

export default goodsToCart
