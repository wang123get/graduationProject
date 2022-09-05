<template>
  <div>
    <show-home />
  </div>
  <div class='showContent'>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import showHome from './cpns/showHome.vue'

export default defineComponent({
  name: 'home',
  components: { showHome }
})
</script>

<style scoped>
.showContent {
  height: 1200px;
}

</style>