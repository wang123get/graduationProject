<template>
  <div>
    {{ goodsList }}
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'searchView',
  components: {},
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

    getGoods(1, route.params.keyword as unknown as string)
    const goodsList = computed(() => store.getters['Search/getGoodsList'])

    return { route, goodsList }
  }
})
</script>

<style scoped lang="less"></style>
