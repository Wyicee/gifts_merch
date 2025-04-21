<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

import { type LogosProps } from '@/types/logosProps.ts'

const modules = [Navigation, Pagination, Scrollbar, A11y]

interface Props {
  items: LogosProps[]
  pagination: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="swiper">
    <Swiper :modules="modules" navigation :pagination="pagination">
      <SwiperSlide v-for="item in items" :key="item.id"><img :src="item.src" alt="" /></SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
