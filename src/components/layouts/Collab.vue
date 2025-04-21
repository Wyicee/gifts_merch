<script setup lang="ts">
import Swiper from '@/components/swiper/Swiper.vue'

import { useFooStore } from '@/stores/counter.ts'

const { LogosList } = useFooStore()
</script>

<template>
  <div class="collab container">
    <div class="collab__body">
      <h2 class="collab__body-title">С нами соотрудничают</h2>
      <Swiper :pagination="false" :items="LogosList" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.collab {
  &__body {
    padding-block: 30px;

    &-title {
      padding-bottom: 70px;
    }
  }
}
</style>
