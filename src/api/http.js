import router from '@/router'
import axios from 'axios'
import { Toast } from 'vant'

axios.defaults.baseURL = "http://127.0.0.1:8000/"

axios.defaults.timeout = 10000

axios.defaults.headers['Content-Type'] = 'application/json '
// application/json application/x-www-from-unlencoded

axios.interceptors.request.use(
  config => {
  // console.log()
  if (localStorage.getItem('userToken')) {
    config.headers.authorization = JSON.parse(localStorage.getItem('userToken'))
  }
  return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response.status === 403) {
      // console.log(error.response)
      if (error.response.data.code) {
        if (parseInt(error.response.data.code) === 1002 || parseInt(error.response.data.code) === 1003 || parseInt(error.response.data.code) === 1004) {
          error.response.data.message = '登录信息已失效，请重新登录'
          localStorage.removeItem('userToken')
          localStorage.removeItem('userId')
          setTimeout(function() {
            Toast(error.response.data.message)
            }, 10)
          router.push('/Login')
        }
      }
    } else {
      return Promise.reject(error)
    }
  }
)
export default axios
