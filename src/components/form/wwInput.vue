<template>
  <input class='myInput' @input='input' :value='modelValue' :placeholder='placeholder'/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'wwInput',
  props: ['modelValue','placeholder'],
  setup(props, { emit }) {
    const input = (e: any) => {
      emit('update:modelValue', e.target.value)
    }
    return { input }
  }
})
</script>

<style scoped lang='scss'>
.myInput {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs
  focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
