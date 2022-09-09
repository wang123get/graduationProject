import shopApi from '@/Api/shop/shopApi'
import { Module } from 'vuex'
import { searchType } from './types'

const searchModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      keyword: '',
      pageList: [],
      goodsList: []
    }
  },
  getters: {
    getGoodsList(state) {
      return state.goodsList
    }
  },
  mutations: {
    addNewGoods(state, goods: []) {
      state.goodsList = []
      state.goodsList.push(...goods)
    },
    addGoods(state, goods: []) {
      state.goodsList.push(...goods)
    },
    changeKeyword(state, keyword: string) {
      state.keyword = keyword
    }
  },
  actions: {
    async getGoodsByKeyword({ commit, state }, value: searchType) {
      const goodsList = await shopApi.getSearchKey(value.page, value.keyword)

      console.log(
        '%c [ keyword ]-35',
        'font-size:13px; background:pink; color:#bf2c9f;',
        state.keyword,
        value.keyword
      )
      const data =
        //@ts-ignore
        goodsList.data.tbk_dg_material_optional_response.result_list.map_data

      if (state.keyword !== value.keyword) {
        console.log(
          '%c [ true ]-42',
          'font-size:13px; background:pink; color:#bf2c9f;',
          true
        )
        commit('addNewGoods', data)
        commit('changeKeyword', value.keyword)
      } else {
        console.log(
          '%c [ false ]-42',
          'font-size:13px; background:pink; color:#bf2c9f;',
          false
        )
        commit('addGoods', data)
      }
    }
  }
}

export default searchModule
