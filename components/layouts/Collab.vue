<script setup lang="ts">
import Swiper from '@/components/swiper/Swiper.vue';
import block from 'bem-cn-lite';

import { useListStore } from "~/stores/list";

const { collab } = useListStore()

const logosList = collab.flatMap(list => list.logos)

const b = block('collab');
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
.collab {
  &__body {
    margin-top: 100px;

    @include mobile {
      margin-top: 300px;
    }

    @include mobile-s {
      margin-top: 400px;
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
