<script setup lang="ts"></script>

<template>
  <div class="popular">
    <div class="popular__body container">
      <h2 class="popular__body-title">Самое популярное</h2>
      <p class="popular__body-description">
        Товары, которые наиболее часто заказывают наши клиенты
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popular {
  margin-top: -130px;
  padding-top: 130px;
  position: relative;
  z-index: 100;

  @include tablet {
    margin: 0;
    padding-top: 100px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/popular/bg.png') no-repeat;
    background-size: cover;
    z-index: -100;
  }

  &__body {
  }
}
</style>
