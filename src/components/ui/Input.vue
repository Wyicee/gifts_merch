<script setup lang="ts">
import { useId } from 'vue'

interface InputProps {
  type?: string
  placeholder?: string
  error?: string
  label?: string
  modelValue?: string | number | []
  mods?: 'header' | 'footer' | 'idea'
}

defineProps<InputProps>()

const id = useId()

const emit = defineEmits<{
  update: [value: unknown]
}>()
</script>

<template>
  <div class="form-control">
    <label class="label" :for="id" v-if="label">
      {{ label }}
    </label>
    <input
      :class="`input ${mods}`"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="emit('update', modelValue)"
    />
    <small class="error" v-if="error">{{ error }}</small>
  </div>
</template>

<style scoped lang="scss">
.input {
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
