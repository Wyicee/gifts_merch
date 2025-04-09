<script setup lang="ts">
import { computed } from 'vue'

type classInput = 'header' | 'footer' | 'idea';

const classComputed = computed(() => ({
  'header__input': props.inputClass === 'header',
  'idea__input': props.inputClass === 'idea',
  'footer__input': props.inputClass === 'footer',
}));

const props = defineProps<{
  inputClass: classInput;
}>();
</script>

<template>
  <input
    :class="classComputed"
  />
</template>

<style scoped lang="scss">
input {
  width: 100%;

  &.header__input {
    font-weight: 500;
    max-width: 491px;
    padding: 10px 16px;
    border-radius: $bor-radius-90;
    border: 4px solid $dark-color;

    &::placeholder {
      color: #8E8E8E;
      font-weight: 500;
    }
  }

  &.footer__input {
    padding: 15px;
    border: 2px solid $dark-color;
    border-radius: 15px;

    &::placeholder {
      color: $dark-color;
    }
  }
}
</style>
