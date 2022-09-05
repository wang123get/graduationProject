<template>
  <div id="editor"></div>
</template>

<script lang="ts">
import ToastEditor from '@/components/markDown/config/toastEditor'
import { defineComponent, nextTick } from 'vue'

export default defineComponent({
  name: 'editor',
  components: {},
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 500
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    nextTick(() => {
      const toastUi = new ToastEditor(
        '#editor',
        `${props.modelValue}`,
        `${props.height}px`
      )
      toastUi.editor.on('change', (type: string) => {
        const content =
          type === 'markdown'
            ? toastUi.editor.getMarkdown()
            : toastUi.editor.getHTML()
        emit('update:modelValue', content)
      })
    })
  }
})
</script>

<style lang="scss">
#editor {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
  }

  .fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>
