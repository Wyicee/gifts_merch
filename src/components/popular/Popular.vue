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
  position: relative;
  z-index: 0;
  margin-top: 100px;

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
  }
}
</style>
