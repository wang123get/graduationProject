<template>
  <div>
    <editor v-model="adwawda" :height="300" placeholder="请输入markdown内容" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Editor from '@/components/markDown/editor.vue'

export default defineComponent({
  name: 'userInfo',
  components: { Editor },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
