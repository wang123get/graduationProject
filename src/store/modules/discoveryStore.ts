import { Goods, ShopPagination } from '@/api/Shop/types'
import { Module } from 'vuex'
import shopApi from '@/Api/shop/shopApi'
import { queryShopPagination } from '@/store/modules/types'

const discoveryModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      id: 0,
      title: '',
      page: [],
      goodIdList: [] as ShopPagination[],
      goods: [] as Goods[],
      loadState: 'repeatLoading'
    }
  },
  getters: {
    getIDList(state) {
      return state.goodIdList
    },
    getContentList(state) {
      return state.goods
    },
    getLoadState(state) {
      return state.loadState
    }
  },
  mutations: {
    changeId(state, id: number) {
      state.id = id
    },
    changeTitle(state, title: string) {
      state.title = title
    },
    addGoods(state, goods: Goods[]) {
      state.goods.push(...goods)
    },
    addNewGoods(state, goods: Goods[]) {
      state.goods.length = 0
      state.goods.push(...goods)
    },
    addIDList(state, idList: ShopPagination[]) {
      if (state.goodIdList.length === 0) {
        state.goodIdList.push(...idList)
      }
    },
    addPageList(state, page: number) {
      state.page.push(page)
    },
    clearPageList(state) {
      state.page = []
    },
    changeLoadState(state, loadState) {
      state.loadState = loadState
    }
  },
  actions: {
    changeLoadState({ commit, state }, loadState: boolean) {
      if (state.loadState !== loadState) {
        commit('changeLoadState', loadState)
      }
    },
    async shopListActions({ commit }) {
      const showPageData = await shopApi.getShopPageID()
      commit('addIDList', showPageData.data)
      //@ts-ignore
      commit('changeId', showPageData.data[0].id)
      //@ts-ignore
      commit('changeTitle', showPageData.data[0].title)
    },
    async shopContentListActions(
      { commit, state },
      shopID: queryShopPagination
    ) {
      if (shopID.id === undefined) {
        return
      }
      const shopContentList = await shopApi.getContentById(
        shopID.id,
        shopID.page
      )

      if (state.id !== shopID.id) {
        commit('addNewGoods', shopContentList.data)
        //@ts-ignore
        commit('changeId', shopID.id)
        //@ts-ignore
        commit('changeTitle', shopID.title)
        commit('clearPageList')
        commit('addPageList', shopID.page)
      } else {
        if (!state.page.includes(shopID.page)) {
          commit('addGoods', shopContentList.data)
          commit('addPageList', shopID.page)
        }
      }
    }
  }
}

export default discoveryModule
