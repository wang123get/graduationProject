import { createStore, Store, useStore as useVuexStore } from 'vuex'
import Discovery from '@/store/modules/discoveryStore'
import Coupons from '@/store/modules/couponsStore'
import Special from '@/store/modules/specialsStore'
import Search from '@/store/modules/searchStore'
const store = createStore({
  state() {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    Discovery,
    Coupons,
    Special,
    Search
  }
})

export function setupStore() {
  //main调用方法：login
}

export function useStore(): Store<any> {
  return useVuexStore()
}

export default store
