<template>
  <div>
    <discovery-card :shop-content-list='showContentData' v-if='loadState.loadState === "ok"' />
    <div class='loadBox' v-if='loadState.loadState === "loading"'>
      <img src='src/assets/image/loading.gif' class='DLoading'>
    </div>
  </div>

</template>

<script lang='ts'>
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { shopIDList } from '@/components/Shop/BaseLayout/config'
import DiscoveryCard from '@/components/Shop/showCard/discoveryCard.vue'
import FirstLoad from '@/components/loadIng/firstLoad.vue'


export default defineComponent({
  components: { FirstLoad, DiscoveryCard },
  setup() {
    const route = useRoute()
    const store = useStore()

    const getDiscoveryData = (url: string) => {
      store.dispatch('Discovery/shopContentListActions', {
        //@ts-ignore
        id: shopIDList[url],
        page: 1
      })
    }

    watch(() => route.params.id, (newV) => {
      getDiscoveryData(newV as unknown as string)
    })

    getDiscoveryData(route.params.id as unknown as string)

    const loadState = computed(() => store.getters['Discovery/getLoadState'])
    const showContentData = computed(() => store.getters['Discovery/getContentList'])

    return { route, showContentData, loadState }
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