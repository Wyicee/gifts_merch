<script setup lang="ts">
import Swiper from '@/components/swiper/Swiper.vue';
import bemCn from 'bem-cn-lite';

import { useListStore } from "~/stores/list";

const { collab } = useListStore()

const logosList = collab.flatMap(list => list.logos)

const b = bemCn('collab');
</script>

<template>
  <div :class="[b(''), 'container']">
    <div :class="b('body')">
      <h2 :class="b('body-title')">С нами соотрудничают</h2>
      <Swiper :pagination="false" :items="logosList"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/styles/vars';
@import 'assets/styles/media';

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
