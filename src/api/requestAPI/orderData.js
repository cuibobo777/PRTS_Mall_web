import axios from '../http.js'

const orderData = {
  async getAddress(data) {
    return await axios.get('login/get_address/', data)
  }
}

export default orderData
