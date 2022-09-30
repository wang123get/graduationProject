<template>
  <div class="box">
    <div class="demo-fit">
      <img :src="url" />
      <ww-button class="my-button">保存更新</ww-button>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WwButton from '@/components/form/wwButton.vue'

export default defineComponent({
  name: 'changeAvatar',
  components: { WwButton },
  setup() {
    const url =
      'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2634/avatar.jpg'
    return { url }
  }
})
</script>

<style scoped lang="less">
.box {
  .demo-fit {
    position: relative;
    img {
      margin-top: 10px;
      margin-left: 10px;
      margin-bottom: 10px;
      width: 150px;
      border-radius: 10px;
      float: left;
      border: 1px #a4a4a4 dashed;
    }
    .my-button {
      width: 100px;
      position: absolute;
      margin-left: 20px;
      bottom: 11px;
    }
  }
}
</style>
