<script setup lang="ts">
import Swiper from '@/components/swiper/Swiper.vue'
import bemCn from 'bem-cn-lite'

import { useLogosStore } from '@/stores/logos'

const { LogosList } = useLogosStore()

const b = bemCn('collab')
</script>

<template>
  <div :class="[b(''), 'container']">
    <div :class="b('body')">
      <h2 :class="b('body-title')">С нами соотрудничают</h2>
      <Swiper :pagination="false" :items="LogosList" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.collab {
  &__body {
    margin-top: 100px;

    @include mobile {
      margin-top: 200px;
    }

    &-title {
      padding-bottom: 70px;

      @include mobile {
        font-size: 28px;
      }
    }
  }
}
</style>
