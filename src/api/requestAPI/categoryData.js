import axios from '../http.js'

const categoryData = {
  async category() {
    return await axios.get('category/category/')
  }
}

export default categoryData
