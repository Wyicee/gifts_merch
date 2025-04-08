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
  font-weight: 500;
  padding: 18px 28px;
  max-width: 491px;
  width: 100%;
  border: 4px solid $dark-color;
  border-radius: $bor-radius-90;

  &.header__input {
    padding: 10px 16px;

    &::placeholder {
      color: #8E8E8E;
      font-weight: 500;
    }
  }

  &.footer__input::placeholder {
    color: $dark-color;
  }
}
</style>
