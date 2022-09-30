<template>
  <div class='showContent'>
    <div class='writeContent'></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'showContent',
  components: {},
  setup() {
    const route = useRoute()

    return { route }
  }
})
</script>

<style scoped lang='less'>
.showContent {
  .writeContent {
    width: 660px;
    height: 211px;
    background-color: white;
    border-radius: 6px;
  }
}
</style>
