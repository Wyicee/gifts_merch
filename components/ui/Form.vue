<script setup lang="ts">
defineProps<{
  action?: () => void
  direction?: 'column' | 'row'
}>();
</script>

<template>
  <form class="form" :style="`flex-direction: ${direction}`" @submit.prevent="action">
    <slot/>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
}
</style>
