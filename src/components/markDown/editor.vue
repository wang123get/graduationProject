<script setup lang="ts">
import { nextTick } from 'vue'
import toastEditor from '@/components/markDown/config/toastEditor'

interface Props {
  modelValue?: string
  placeholder?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '支持托放上传图片',
  height: '500px'
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const markdownEditor = new toastEditor(
    '#editor',
    props.height,
    props.modelValue,
    props.placeholder
  )

  markdownEditor.editor.on('change', (type: string) => {
    emit(
      'update:modelValue',
      markdownEditor.editor[type == 'markdown' ? 'getMarkdown' : 'getHTML']()
    )
  })
})
</script>

<template>
  <div id="editor"></div>
</template>

<style lang="scss" scoped>
#editor {
  @apply bg-white;

  //全屏控制
  :deep(.fullScreen) {
    position: fixed !important;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
  }

  //隐藏底部编辑器模式切换
  :deep(.toastui-editor-mode-switch) {
    display: none !important;
  }
}
</style>
