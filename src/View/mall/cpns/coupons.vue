<template>
  <div>
    <div>
      <shop-header />
    </div>
    <div class="bigBox">
      <div class="contentBox">
        <ul>
          <template v-for="tag in IDList">
            <router-link :to="'/coupons/' + tag.favorites_title">
              <li>
                <span style="line-height: 40px">{{ tag.favorites_title }}</span>
              </li>
            </router-link>
          </template>
        </ul>
      </div>
      <div class="contentListBox">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { recommendType } from '@/Api/shop/types'
import { useStore } from '@/store'
import { loadMore } from '@/components/loadMore/dropDrowLoadMore'

export default defineComponent({
  name: 'coupons',
  components: {},
  setup() {
    const store = useStore()
    const getContentID = () => {
      store.dispatch('Coupons/getRecommendIDList')
    }
    getContentID()

    const IDList = computed(
      () => store.getters['Coupons/getFavoritesIDList']
    ) as unknown as recommendType[]

    return { IDList }
  }
})
</script>

<style scoped lang="less">
.router-link-exact-active {
  li {
    border-bottom: 2px solid #c9302c;
    color: #c9302c !important;
  }
}

.bigBox {
  width: 100%;
  height: 100%;

  .contentBox {
    width: 1140px;
    height: 60px;
    margin: 15px auto;
    box-shadow: 0 5px 10px #d4d4d4;

    ul {
      li {
        float: left;
        line-height: 58px;
        color: #8c8c8c;
        font-size: 16px;
        margin-left: 20px;
        cursor: pointer;
        margin-right: 20px;
      }

      li:hover {
        color: #c9302c !important;
      }
    }
  }

  .contentListBox {
    width: 1140px;
    height: 100%;
    margin: 20px auto;
    box-shadow: var(--el-box-shadow-lighter);
  }
}
</style>
