import { shopRequest } from '@/plugins/axios'
import {
  Goods,
  recommendContentList,
  recommendType,
  ShopPagination,
  preferentialType,
  searchType
} from './types'
import store, { useStore } from '@/store'

class shopApi {
  stroe = useStore()

  /**
   * 获取发现页的分类
   * @constructor
   */
  getShopPageID() {
    return shopRequest.get<ShopPagination>({
      url: `/discovery/categories`
    })
  }

  /**
   * 根据发现页分类ID的获取分类的内容
   * @param ID 分类ID
   * @param page 商品列表
   */
  getContentById(ID: number, page: number) {
    return shopRequest.request<Goods>({
      url: `/discovery/${ID}/${page}`,
      method: 'get',
      interceptors: {
        requestInterceptor: (config) => {
          store.dispatch('Discovery/changeLoadState', {
            loadState: 'loading'
          })
          return config
        },
        responseInterceptor: (res) => {
          store.dispatch('Discovery/changeLoadState', {
            loadState: 'ok'
          })
          console.log('释放')
          return res
        }
      }
    })
  }

  /**
   * 获取卷场的分类
   * @returns 卷场ID分类
   */
  getRecommendID() {
    return shopRequest.get<recommendType>({
      url: `/recommend/categories`
    })
  }

  /**
   * 根据卷场分类ID的获取分类的内容
   * @param id
   * @returns 商品列表
   */
  getRecommendContentByID(id: number) {
    return shopRequest.get<recommendContentList>({
      url: `/recommend/${id}`,
      interceptors: {
        requestInterceptor: (config) => {
          console.log('cou开始拦截')
          store.dispatch('Coupons/changeLoadState', {
            loadState: 'loading'
          })
          return config
        },
        responseInterceptor: (res) => {
          console.log('cou释放拦截')
          store.dispatch('Coupons/changeLoadState', {
            loadState: 'ok'
          })
          return res
        }
      }
    })
  }

  /**
   * 获取特惠
   * @param page 页码
   */
  getPreferential(page: number) {
    return shopRequest.get<preferentialType>({
      url: `/onSell/${page}`
    })
  }

  getSearchKey(page: number, keyword: string) {
    return shopRequest.request<searchType>({
      url: `/search`,
      params: {
        page: page,
        keyword: keyword
      }
    })
  }
}

export default new shopApi()
