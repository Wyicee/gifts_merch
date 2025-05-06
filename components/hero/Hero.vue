<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import bemCn from 'bem-cn-lite';

import { useListStore } from "~/stores/list";

const { hero } = useListStore()

const preferencesList = hero.flatMap(list => list.preferences)

const b = bemCn('hero');
</script>

<template>
  <div :class="b()">
    <Header/>
    <div :class="[b('body'), 'container']">
      <h2 :class="b('body-title')">Свежее дыхание в корпоративной жизни</h2>
      <p :class="b('body-description')">
        Мы усовершенствовали процесс заказа продукции для того, чтобы вы и ваша компания
        сконцентрировались на основных задачах и достигали поставленных целей.
      </p>
      <div :class="b('body-preferences')">
        <div
            v-for="(item, index) in preferencesList"
            :key="index"
            class="hero__body-preferences-item"
        >
          <img src="/images/hero/circle.svg" alt="" width="109" height="94">
          <p v-html="item"/>
        </div>
      </div>
      <img
          :class="b('body-image')"
          src="/images/hero/bg-girls.png"
          alt="girls"
          width="785"
          height="610"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -180px 0;
    background: url('/images/hero/bg.png') no-repeat;
    background-size: cover;
    z-index: -1;

    @include tablet {
      inset-block: 0 90px;
    }
  }

  &__body {
    display: grid;
    grid-template-areas:
      'title image'
      'description image'
      'preferences image';
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 39px;
    position: relative;

    @include tablet {
      grid-template-areas:
        'title image'
        'description image'
        'description image'
        'preferences preferences';
    }

    @include mobile {
      grid-template-areas:
        'title title'
        'description description'
        'preferences image';
    }

    &-title {
      grid-area: title;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding-top: 49px;

      @include laptop {
        margin-right: -200px;
      }

      @include tablet {
        font-size: 36px;
      }

      @include mobile {
        font-size: 24px;
        max-width: 363px;
      }
    }

    &-description {
      grid-area: description;
      font-size: 18px;
      line-height: 130%;
      letter-spacing: 0.07em;
      max-width: 630px;
      margin-right: -50px;

      @include tablet {
        font-size: 16px;
      }

      @include mobile {
        max-width: 385px;
      }
    }

    &-preferences {
      grid-area: preferences;
      display: flex;
      align-items: center;
      column-gap: 12px;
      padding-block: 66px 150px;

      @include tablet {
        grid-column: -1 / 1;
        justify-self: center;
        column-gap: 74px;
        padding-block: 70px 0;
        margin-top: 120px;
      }

      @include mobile {
        flex-direction: column;
        justify-self: start;
        row-gap: 20px;
        margin: 0;
        padding-block: 33px 0;
      }

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 21px;
        font-weight: 600;
        text-align: center;
        white-space: pre-wrap;

        img {
          max-width: 109px;
          width: 100%;

          @include mobile {
            max-width: 71px;
          }
        }

        @include laptop {
          font-size: 18px;
        }

        @include tablet {
          font-size: 16px;
        }
      }
    }

    &-image {
      grid-area: image;
      margin-bottom: -100px;
      position: relative;
      z-index: -1;

      @include laptop {
        margin-bottom: -180px;
      }

      @include tablet {
        margin-bottom: -310px;
      }

      @include mobile {
        transform: scale(-1, 1);
        margin: 0;
      }
    }
  }
}
</style>
