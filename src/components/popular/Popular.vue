<script setup lang="ts">
import { computed } from 'vue'

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const isDesktop = computed(() => width.value >= 767.98)
</script>

<template>
  <div class="popular">
    <div class="popular__body container">
      <h2 class="popular__body-title">Самое популярное</h2>
      <span class="popular__body-star"></span>
      <p class="popular__body-description">
        Товары, которые наиболее часто заказывают наши клиенты
      </p>
      <div class="popular__body-collage">
        <figure class="popular__body-collage-item">
          <img src="@/assets/images/popular/1.jpg" alt="" />
          <figcaption v-if="isDesktop">
            <p>Шопперы</p>
          </figcaption>
        </figure>
        <img src="@/assets/images/popular/1.jpg" alt="" v-for="i in 3" :key="i" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popular {
  position: relative;
  z-index: 0;
  margin-top: 100px;
  padding-bottom: 200px;

  @include mobile {
    padding-bottom: 100px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -150px 0 0 0;
    background: url('@/assets/images/popular/bg.png') no-repeat;
    background-size: cover;
    z-index: -1;

    @include tablet {
      inset-block: -50px 0;
    }
  }

  &__body {
    &-title {
      @include mobile {
        font-size: 28px;
      }

      @include mobile-s {
        font-size: 24px;
      }
    }

    &-description {
      line-height: 130%;
      letter-spacing: 0.07em;
      text-transform: lowercase;

      @include mobile {
        font-size: 16px;
      }

      @include mobile-s {
        font-size: 15px;
      }
    }

    &-collage {
      display: grid;
      grid-template-columns: 5fr 1fr 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        'image-big image-medium image-medium'
        'image-big image-medium image-medium'
        'image-big image-small-1 image-small-2';
      align-items: stretch;
      gap: 15px;
      padding-top: 30px;

      @include mobile {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
          'image-big image-big'
          'image-medium image-medium'
          'image-small-1 image-small-2';
        gap: 10px 5px;
        padding-top: 10px;

        @include mobile-s {
          padding-top: 40px;
        }
      }

      &-item {
        grid-area: image-big;
        text-align: center;

        p {
          font-size: 24px;
          font-weight: 600;
          padding-top: 22px;
        }

        img {
          max-height: 1100px;
          height: 100%;
        }
      }

      img {
        border-radius: 15px;
        object-fit: cover;

        &:nth-child(2) {
          grid-area: image-medium;
        }

        &:nth-child(3) {
          grid-area: image-small-1;
        }

        &:nth-child(4) {
          grid-area: image-small-2;
        }
      }
    }
  }
}
</style>
