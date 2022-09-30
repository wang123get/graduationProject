<template>
  <div class="bigBox">
    <div class="commHeader">
      <communication-header />
    </div>
    <div class="context">
      <div class="clickList">
        <click-list />
      </div>
      <div class="content">
        <router-view />
      </div>
      <div class="hotContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommunicationHeader from '@/View/Communication/cpns/communicationHeader.vue'
import clickList from '@/View/Communication/cpns/clickList.vue'

export default defineComponent({
  name: 'communicationView',
  components: { CommunicationHeader, clickList },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.bigBox {
  background-color: #ebedf0!important;
  .commHeader {
    width: 100%;
    height: 60px;
  }

  .context {
    width: 1200px;
    height: 1000px;
    margin: 20px auto 0;

    .clickList {
      float: left;
      width: 140px;
      background-color: #fafafa;
      border-radius: 6px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .content {
      width: 660px;
      margin-left: 160px;
    }
  }
}
</style>
