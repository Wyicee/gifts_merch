<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import block from 'bem-cn-lite';

import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const isDesktop = computed(() => width.value >= 767.98);

const b = block('popular');
</script>

<template>
  <div :class="b()">
    <div :class="[b('body'), 'container']">
      <h2 :class="b('body-title')">
        Самое популярное
        <span :class="b('body-title-star')"/>
      </h2>
      <p :class="b('body-description')">Товары, которые наиболее часто заказывают наши клиенты</p>
      <Button :class="b('body-button')" mods="transparent">
        Все товары
        <span :class="b('body-button-arrow-right')"/>
      </Button>
      <div :class="b('body-collage')">
        <figure :class="b('body-collage-item')">
          <NuxtImg src="/images/popular/1.jpg" alt="" />
          <figcaption v-if="isDesktop">
            <p>Шопперы</p>
          </figcaption>
        </figure>
        <NuxtImg v-for="i in 3" :key="i" src="/images/popular/1.jpg" alt="" loading="lazy" />
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
    background: url('/images/popular/bg.png') no-repeat;
    background-size: cover;
    z-index: -1;

    @include tablet {
      inset-block: -50px 0;
    }
  }

  &__body {
    display: grid;
    grid-template-areas:
      'title button'
      'description button'
      'collage collage';
    grid-template-columns: 1fr auto;

    @include mobile-s {
      grid-template-areas:
        'title title'
        'description description'
        'collage collage'
        'button button';
    }

    &-title {
      grid-area: title;
      position: relative;

      &-star {
        &::after {
          content: '';
          background: url('/icons/star-green.svg') no-repeat center / cover;
          width: 32px;
          height: 31px;
          margin-left: 28px;
          position: absolute;
          bottom: 27px;

          @include mobile {
            width: 21px;
            height: 21px;
            margin-left: 18px;
            bottom: 15px;
          }
        }
      }

      @include mobile {
        font-size: 28px;
      }

      @include mobile-s {
        font-size: 24px;
      }
    }

    &-description {
      grid-area: description;
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

    &-button {
      grid-area: button;

      @include mobile {
        display: none !important;
      }

      @include mobile-s {
        display: block !important;
        justify-self: end;
        padding-top: 17px;
      }

      &-arrow-right {
        &::after {
          content: url('/icons/arrow-right-icon.svg');
          margin-left: 20px;
        }
      }
    }

    &-collage {
      grid-area: collage;
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
