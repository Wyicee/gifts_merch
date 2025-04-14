<script setup lang="ts">
defineProps<{
  action?: () => void
  direction?: 'column' | 'row'
}>()
</script>

<template>
  <form class="form" @submit.prevent="action" :style="`flex-direction: ${direction}`">
    <slot />
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
}
</style>
