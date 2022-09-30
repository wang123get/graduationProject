<template>
  <button class="myButton">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'wwButton'
}
</script>

<style scoped lang="scss">
.myButton {
  @apply bg-violet-700 text-white w-full py-2 rounded-md hover:bg-violet-300 duration-300;
}
</style>
