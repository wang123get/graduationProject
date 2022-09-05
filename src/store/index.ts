import { createStore, Store, useStore as useVuexStore } from 'vuex'
import Discovery from '@/store/modules/discoveryStore'
import Coupons from '@/store/modules/couponsStore'

const store = createStore({
  state() {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    Discovery,
    Coupons
  }
})

export function setupStore() {
  //main调用方法：login
}

export function useStore(): Store<any> {
  return useVuexStore()
}

export default store
