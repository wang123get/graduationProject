<template>
  <div>
    <div class="header" style="position: absolute; width: 100%">
      <my-header />
    </div>
    <div class="welcomeImage" style="width: 100%; opacity: 1">
      <img class="box-image" src="~@/assets/image/leisure-time.jpg" alt="" />
    </div>

    <div style="display: flex; justify-content: center; align-items: center">
      <div class="show-text">
        <span style="font-size: 2.85em; font-weight: bold">休闲客栈</span>
        <write-code class="codeWrite" />
      </div>
    </div>

    <div class="down">
      <img src="~@/assets/image/down.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import myHeader from '@/components/Header/myHeader.vue'
import writeCode from '@/components/autoWriteCode/writeCode.vue'

export default defineComponent({
  name: 'admin',
  components: { myHeader, writeCode },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.show-text {
  top: 40%;
  text-align: center;
  color: white;
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
    Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.codeWrite {
  position: relative;
  width: 500px;
  text-align: center;
  /*right: 31%;*/
  font-size: 1em;
}

.down {
  position: absolute;
  width: 30px;
  bottom: 0;
  left: 50%;
  opacity: 0.5;
  animation: scaleout 1.2s infinite ease-in-out;
}

@keyframes scaleout {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}

.box-image {
  width: 100%;
  height: 1000px;
  background-size: cover;
  box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.36),
    0px 8px 20px rgba(0, 0, 0, 0.72);
}
</style>
