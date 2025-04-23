<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="creative">
    <div class="creative__body container">
      <div class="creative__body-wrapper">
        <img
          class="creative__body-word"
          src="@/assets/images/creative/creative.png"
          alt=""
          width="299"
          height="64"
        />
        <h2 class="creative__body-title">
          Хотите удивить ваших коллег/партнеров необычными подарками?
        </h2>
        <p class="creative__body-description">
          Выбирайте готовые подарочные наборы или укажите<br />
          критерии по которым мы соберем для Вас уникальный бокс.
        </p>
        <div class="creative__body-buttons">
          <Button mods="default">Перейти к наборам</Button>
          <Button mods="default">Создать свой</Button>
        </div>
      </div>
      <img
        class="creative__body-image"
        src="@/assets/images/creative/image.png"
        alt=""
        width="722"
        height="649"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.creative {
  background-image: url('@/assets/images/creative/bg.png');
  background-size: cover;

  &__body {
    display: flex;
    align-items: center;

    &-wrapper {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    &-word {
      align-self: center;
    }

    &-title {
      line-height: 130%;
      margin-right: -200px;
      padding-top: 9px;
    }

    &-description {
      color: $dark-grey-color;
      letter-spacing: 0.07em;
      padding-top: 23px;
    }

    &-buttons {
      display: flex;
      align-items: center;
      column-gap: 29px;
      padding-top: 44px;

      button:first-child {
        background-color: $dark-color;
      }

      button:last-child {
        color: #000;
        background-color: #dadbe1;
      }
    }

    &-image {
      margin-top: 50px;
    }
  }
}
</style>
