import { Module } from 'vuex'
import { queryRecommendType } from './types'
import { recommendContentList, recommendType } from '@/Api/shop/types'
import shopApi from '@/Api/shop/shopApi'

const couponsModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      favoritesID: 0,
      favoritesTitle: '',
      favoritesIDList: [] as recommendType[],
      recommendContendList: [] as recommendContentList[],
      loadState: 'loading',
    }
  },
  getters: {
    getFavoritesIDList(state) {
      return state.favoritesIDList
    },
    getRecommendContendList(state) {
      return state.recommendContendList
    },
    getLoadState(state) {
      return state.loadState
    }
  },
  mutations: {
    addFavoritesIDList(state, IDList: recommendType[]) {
      if (state.favoritesIDList.length === 0) {
        state.favoritesIDList.push(...IDList)
      }
    },
    changeId(state, id: number) {

      state.favoritesID = id
    },
    changeTitle(state, title: string) {
      state.favoritesTitle = title
    },
    addGoods(state, goods: recommendContentList[]) {
      state.recommendContendList.push(...goods)
    },
    addNewGoods(state, goods: recommendContentList[]) {
      state.recommendContendList = []
      state.recommendContendList.push(...goods)
    },
    changeLoadState(state, loadState: boolean) {
      state.loadState = loadState
    },
    clearRecommendContendListGoods(state) {
      state.recommendContendList = []
    }
  },
  actions: {
    clearList({commit}) {
      commit('clearRecommendContendListGoods')
    },
    changeLoadState({ commit, state }, loadState: boolean) {
      if (state.loadState !== loadState) {
        commit('changeLoadState', loadState)
      }
    },
    async getRecommendIDList({ commit }) {
      const IDList = await shopApi.getRecommendID()

      commit('addFavoritesIDList', IDList.data)
      //@ts-ignore
      commit('changeId', IDList.data[0].favorites_id)
      //@ts-ignore
      commit('changeTitle', IDList.data[0].favorites_title)
    },
    async getRecommendContentByID(
      { commit, state },
      shopID: queryRecommendType
    ) {
      if (shopID.id === undefined) {
        return
      }
      const shopContentList = await shopApi.getRecommendContentByID(shopID.id)
      const DataList =
        //@ts-ignore
        shopContentList.data.tbk_dg_optimus_material_response.result_list
          .map_data
      if (state.favoritesID !== shopID.id) {
        commit('addNewGoods', DataList)
        //@ts-ignore
        commit('changeId', shopID.id)
        //@ts-ignore
        commit('changeTitle', shopID.title)
      } else {
        commit('addGoods', DataList)
      }
    }
  }
}

export default couponsModule