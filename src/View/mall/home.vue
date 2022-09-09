<template>
  <div class="mallHome">
    <div class="header">
      <shop-header />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShopHeader from '@/components/Shop/shopHeader.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'home',
  components: { ShopHeader },
  setup() {
    const route = useRoute()
    route.redirectedFrom
    return {}
  }
})
</script>

<style scoped lang="less">
.mallHome {
  .header {
  }
}
</style>
