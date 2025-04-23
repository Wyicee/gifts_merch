<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

import { type LogosProps } from '@/types/logosProps.ts'
import { reactive } from 'vue'

const modules = [Navigation, Pagination, A11y, Autoplay]

interface Props {
  items: LogosProps[]
  pagination: boolean
}

defineProps<Props>()

const swiperSettings = reactive({
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 120,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767.98: {
      slidesPerView: 3,
    },
    1023.98: {
      slidesPerView: 5,
    },
  },
})
</script>

<template>
  <Swiper v-bind="swiperSettings" :modules="modules" navigation :pagination="pagination">
    <SwiperSlide v-for="item in items" :key="item.id"><img :src="item.src" alt="" /></SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.swiper-wrapper {
  display: flex;
  flex-direction: column;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;

  @include tablet {
    padding-inline: 60px;
  }

  @include mobile {
    padding-inline: 40px;
  }

  @include mobile-s {
    padding-inline: 30px;
  }
}
</style>
