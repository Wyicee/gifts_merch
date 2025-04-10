<script setup lang="ts">
import Input from '@/components/ui/Input.vue'

type formType = 'footer' | 'idea'

defineProps<{
  formType?: formType
}>()
</script>

<template>
  <form method="post" v-if="formType">
    <Input type="tel" input-class="footer" placeholder="Номер телефона" />
  </form>
  <form method="post" v-else-if="formType">
    <Input type="name" input-class="idea" placeholder="Имя" />
  </form>
</template>
