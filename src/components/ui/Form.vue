<script setup lang="ts">
import Input from '@/components/ui/Input.vue'

type formType = 'footer' | 'idea';

defineProps<{
  type: formType
}>();
</script>

<template>
  <form
    method="post"
    v-if="type === 'footer'"
    type="footer"
  >
    <Input
      type="tel"
      inputClass="footer"
      placeholder="Номер телефона"
    />
  </form>
</template>
