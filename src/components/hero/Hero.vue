<script setup lang="ts">
import Header from '@/components/header/Header.vue'

const preferencesList = [
  `Высокое\n качество <strong>ONLY</strong>`,
  `Поддержка\n менеджера <strong>24/7</strong>`,
  `Выполнение заказа\n в <strong>TURBO-режиме</strong>`,
]
</script>

<template>
  <div class="hero">
    <Header />
    <div class="hero__body container">
      <div class="hero__body-wrapper">
        <h2 class="hero__body-title">Свежее дыхание в корпоративной жизни</h2>
        <p class="hero__body-description">
          Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія
          сконцентрувались на основних задачах<br />
          і досягали поставлених цілей.
        </p>
        <div class="hero__body-preferences">
          <div
            class="hero__body-preferences-item"
            v-for="(item, index) in preferencesList"
            :key="index"
          >
            <img src="@/assets/images/hero/circle.svg" alt="" width="109" height="94" />
            <p v-html="item"></p>
          </div>
        </div>
      </div>
      <img src="@/assets/images/hero/bg-girls.png" alt="" width="785" height="610" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  background: url('@/assets/images/hero/bg.svg') no-repeat;
  background-size: cover;

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__body {
    display: flex;
    align-items: center;
    column-gap: 39px;

    &-title {
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding-top: 49px;
    }

    &-description {
      font-size: 18px;
      line-height: 130%;
      letter-spacing: 0.07em;
      max-width: 630px;
    }

    &-preferences {
      display: flex;
      align-items: center;
      column-gap: 12px;
      padding-top: 66px;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 21px;
        font-weight: 600;
        text-align: center;
        white-space: pre-wrap;
      }
    }
  }
}
</style>
