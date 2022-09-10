<template>
  <div class='searchView'>
    <search-card :good-list='goodsList' v-if='loadState === "ok"' />
    <div class='loading'>
      <img src='src/assets/image/loading.gif' v-if="loadState === 'loading'">
    </div>
  </div>
</template>

<script lang='ts'>
import { useStore } from '@/store'
import { defineComponent, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SearchCard from '@/components/Shop/showCard/searchCard.vue'

export default defineComponent({
  name: 'searchView',
  components: { SearchCard },
  setup() {
    const route = useRoute()
    const store = useStore()

    const getGoods = (page: number, keyword: string) => {
      store.dispatch('Search/getGoodsByKeyword', {
        page: page,
        keyword: keyword
      })
    }

    watch(
      () => route.params.keyword,
      (newV) => {
        getGoods(1, newV as unknown as string)
      }
    )


    const goodsList = computed(() => store.getters['Search/getGoodsList'])
    const loadState = computed(() => store.getters['Search/getLoadState'])
    return { route, goodsList, loadState }
  }
})
</script>

<style scoped lang='less'>
.searchView {
  width: 1140px;
  margin: 20px auto;

  .loading {
    width: 80px;
    margin: 0 auto;
  }
}

</style>
