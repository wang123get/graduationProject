<template>
  <div>
    <main>
      <h1>
        <span id="text"> </span>
        <span class="mark"></span>
      </h1>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { write } from '@/components/autoWriteCode/config'

export default defineComponent({
  name: 'writeCode',
  components: {},
  setup() {
    onMounted(() => {
      const textList = [
        '人的一生都会扮演很多角色，如果你不高兴，你可以把剧本扔了。不过记住，有一份剧本是真正属于你的，千万别丢错了。',
        '人生没有彩排，每一次都是现场直播。',
        '火车是朝前开的，去哪儿的风景并不重要，关键在于窗外的风景。'
      ]
      write(textList)
    })
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: white;
  font-weight: 550;
}

span.mark {
  border-right: 2px solid white;
  animation: blink 0.6s step-end infinite;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
