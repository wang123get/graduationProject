<template>
  <div class='Box'>
    <div class='listBox'>
      <div class='content-title-style'>
        <span
        ><template v-for='text in route.params.id.length - 1'>
            {{ route.params.id[text - 1] }}<em class='emStyle'>/</em>
          </template>
          <span>{{ route.params.id[route.params.id.length - 1] }}</span>
        </span>
      </div>
      <div class='content-list'>
        <coupons-card :shopList='showContentData' v-if='loadState.loadState === "ok"'/>
      </div>
      <div>
        <img src='src/assets/image/loading.gif' v-if='loadState.loadState === "loading"' class='loading'>
      </div>
    </div>
    <div style='clear: both'></div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, watch } from 'vue'
import CouponsCard from '@/components/Shop/showCard/couponsCard.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { recommendID } from '@/components/Shop/BaseLayout/config'

export default defineComponent({
  name: 'couponsInter',
  components: { CouponsCard },
  setup() {
    const route = useRoute()
    const store = useStore()

    const getCouponData = (url: string) => {
      store.dispatch('Coupons/getRecommendContentByID', {
        //@ts-ignore
        id: recommendID[url],
        page: 1
      })
    }

    watch(() => route.params.id, (newV) => {
      getCouponData(newV as unknown as string)
    })

    getCouponData(route.params.id as unknown as string)

    const showContentData = computed(() => store.getters['Coupons/getRecommendContendList'])

    const loadState = computed(() => store.getters['Coupons/getLoadState'])
    return { route, showContentData, loadState }
  }
})
</script>

<style scoped lang='less'>
.Box {
  .listBox {
    background-color: white;

    .content-title-style {
      font-size: 20px;
      font-weight: 600;
      color: #4d555d;
      font-style: normal;
      text-align: center;
      margin: 0 3px 10px;
    }

    .emStyle {
      margin-left: 5px;
      margin-right: 5px;
      font-weight: 400;
      font-size: 16px;
    }
  }

}

.loading {
  width: 70px;
  height: 70px;
  margin: 0 auto;
}

</style>
