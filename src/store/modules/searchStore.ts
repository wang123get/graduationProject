import shopApi from '@/Api/shop/shopApi'
import { Module } from 'vuex'
import { searchType } from './types'

const searchModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      keyword: '',
      pageList: [],
      goodsList: [],
      loadState: 'loading'
    }
  },
  getters: {
    getGoodsList(state) {
      return state.goodsList
    },
    getLoadState(state) {
      return state.loadState
    }
  },
  mutations: {
    clearGoods(state) {
      state.goodsList = []
    },
    addGoods(state, goods: []) {
      state.goodsList.push(...goods)
    },
    changeKeyword(state, keyword: string) {
      state.keyword = keyword
    },
    changeLoadState(state, loading: number) {
      state.loadState = loading
    }
  },
  actions: {
    changeLoadStateActions({ commit, state }, loading: string) {
      if (state.loadState !== loading) {
        commit('changeLoadState', loading)
      }
    },
    clearGoodsList({ commit, state }, keyword: string) {
      if (state.keyword !== keyword) {
        commit('clearGoods')
      } else {
        return
      }
    },
    async getGoodsByKeyword({ commit, state }, value: searchType) {
      if (value.keyword === undefined || value.keyword === null){
        return
      }
      const goodsList = await shopApi.getSearchKey(value.page, value.keyword)
      const data =
        //@ts-ignore
        goodsList.data.tbk_dg_material_optional_response.result_list.map_data

      if (state.keyword !== value.keyword) {
        commit('changeKeyword', value.keyword)
        commit('addGoods', data)
      } else {
        commit('addGoods', data)
      }
    }
  }
}

export default searchModule
