<script setup lang="ts">
type classInput = 'header' | 'footer' | 'idea'

defineProps<{
  inputClass?: classInput
}>()
</script>

<template>
  <input :class="inputClass" />
</template>

<style scoped lang="scss">
input {
  width: 100%;

  &.header {
    font-weight: 500;
    max-width: 491px;
    padding: 10px 16px;
    border-radius: $bor-radius-90;
    border: 4px solid $dark-color;

    @include laptop {
      border: 2px solid $dark-color;
    }

    &::placeholder {
      color: #8e8e8e;
      font-weight: 500;
    }
  }

  &.footer {
    padding: 15px;
    border: 2px solid $dark-color;
    border-radius: 15px;

    &::placeholder {
      color: $dark-color;
    }
  }

  &.idea {
    max-width: 336px;
    border: none;
    border-bottom: 1px solid $dark-color;
    background: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:focus {
      border: none;
    }
  }
}
</style>
