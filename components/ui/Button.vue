<script setup lang="ts">
interface ButtonProps {
  mods?: 'default' | 'transparent';
}

const emit = defineEmits<{ 'update:modelValue': [] }>();

defineProps<ButtonProps>();
</script>

<template>
  <button type="button" :class="mods" @click="emit('update:modelValue')">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
button {
  font-size: 18px;
  text-wrap: nowrap;

  &.default {
    color: #eef1f6;
    font-weight: 600;
    padding: 17px 62px;
    border: none;
    border-radius: $bor-radius-90;
    background-color: $green-color;

    &:active {
      scale: .9;
    }

    @include laptop {
      font-size: 14px;
      padding: 10px 37px;
    }

    &:hover {
      box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.1);
    }
  }

  &.transparent {
    background: initial;
    border: none;
  }
}
</style>
