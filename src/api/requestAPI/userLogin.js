import axios from '../http.js'

const userLogin = {
  async login(data) {
    return await axios.post('login/login/', data)
  },
  async register(data) {
    return await axios.post('login/register/', data)
  },
  async addAddress(data) {
    return await axios.post('login/add_address/', data)
  },
  async getAddress(url) {
    return await axios.get(url)
  },
  async getUserDetail(url) {
    return await axios.get(url)
  }
}

export default userLogin
