// axios统一出口
import Axios from './config/Axios'

const shopRequest = new Axios({
  baseURL: 'https://api.sunofbeaches.com/shop',
  timeout: 10000
})

export { shopRequest }
