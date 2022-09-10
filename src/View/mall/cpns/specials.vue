<template>
  <div class="specials">
    <div class="box">
      <preferential-card :good-list="showContentList" />
      <div class="DLoading" v-if="loadState.loadState === 'loading'">
        <img src="src/assets/image/loadLove.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PreferentialCard from '@/components/Shop/showCard/preferentialCard.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'specials',
  components: { PreferentialCard },
  setup() {
    const store = useStore()
    const startSpecials = (page: number) => {
      store.dispatch('Special/shopContentListActions', {
        page: page
      })
    }
    startSpecials(1)

    const showContentList = computed(
      () => store.getters['Special/getContentList']
    )
    const loadState = computed(() => store.getters['Special/getLoadState'])
    return { showContentList, loadState }
  }
})
</script>

<style scoped lang="less">
.box {
  width: 1140px;
  margin: 20px auto;

  .DLoading {
    width: 200px;
    height: 200px;
    margin: 10px auto;
  }
}
</style>
