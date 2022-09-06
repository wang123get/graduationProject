import { Module } from 'vuex'
import { preferentialType } from '@/Api/shop/types'
import { queryPreferentialType } from '@/store/modules/types'
import shopApi from '@/Api/shop/shopApi'

const specialModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      pageList: [],
      goods: [] as preferentialType[],
      loadState: 'loading'
    }
  },
  getters: {
    getContentList(state) {
      return state.goods
    },
    getLoadState(state) {
      return state.loadState
    }
  },
  mutations: {
    addGoods(state, goods: preferentialType[]) {
      state.goods.push(...goods)
    },
    addPageList(state, page: number) {
      state.pageList.push(page)
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
    async shopContentListActions(
      { commit, state },
      shopID: queryPreferentialType
    ) {
      const shopContentList = await shopApi.getPreferential(shopID.page)
      const DataList =
        //@ts-ignore
        shopContentList.data.tbk_dg_optimus_material_response.result_list
          .map_data

      if (!state.pageList.includes(shopID.page)) {
        commit('addGoods', DataList)
        commit('addPageList', shopID.page)
      }
    }
  }
}

export default specialModule