<template>
  <div>
    <discovery-card
      :shop-content-list='showContentData'
    />
    <div class='loadBox' v-if="loadState.loadState === 'loading'">
      <img src='src/assets/image/loading.gif' class='DLoading' />
    </div>
  </div>

</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { shopIDList } from '@/components/Shop/BaseLayout/config'
import DiscoveryCard from '@/components/Shop/showCard/discoveryCard.vue'
import { loadMore } from '@/components/loadMore/dropDrowLoadMore'

export default defineComponent({
  components: { DiscoveryCard },
  setup() {
    const route = useRoute()
    const store = useStore()
    let page = ref(1)
    const getDiscoveryData = (url: string, page: number) => {
      store.dispatch('Discovery/shopContentListActions', {
        //@ts-ignore
        id: shopIDList[url],
        page: page
      })
    }

    loadMore(() => {
      getDiscoveryData(route.params.id as unknown as string, page.value++)
    })


    getDiscoveryData(route.params.id as unknown as string, page.value)

    const loadState = computed(() => store.getters['Discovery/getLoadState'])
    const showContentData = computed(
      () => store.getters['Discovery/getContentList']
    )

    console.log(showContentData)

    watch(
      () => route.params.id,
      (newV) => {
        page.value = 1
        showContentData.value.length = 0
        getDiscoveryData(newV as unknown as string, page.value)
      }
    )
    return { route, showContentData, loadState, page }
  }
})
</script>

<style scoped lang='less'>
.loadBox {
  background-color: white;
  box-shadow: 0 5px 10px #d4d4d4;

  .DLoading {
    margin: 0 auto;
    width: 80px;
    height: 80px;
  }
}
</style>
