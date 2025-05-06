<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import bemCn from 'bem-cn-lite'

defineOptions({
  name: 'GmCreative',
})

const b = bemCn('gm-creative')
</script>

<template>
  <div :class="b()">
    <div :class="[b('body'), 'container']">
      <div :class="b('body-wrapper')">
        <NuxtImg
          :class="b('body-word')"
          src="/images/creative/creative.png"
          alt="CREATIVE-WORD-OMG"
          width="299"
          height="64"
        />
        <h2 :class="b('body-title')">
          Хотите удивить ваших коллег/партнеров необычными подарками?
        </h2>
        <p :class="b('body-description')">
          Выбирайте готовые подарочные наборы или укажите<br >
          критерии по которым мы соберем для Вас уникальный бокс.
        </p>
        <div :class="b('body-buttons')">
          <Button mods="default">Перейти к наборам</Button>
          <Button mods="default">Создать свой</Button>
        </div>
      </div>
      <NuxtImg
        :class="b('body-image')"
        src="/images/creative/image.png"
        alt=""
        width="722"
        height="649"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

.gm-creative {
  background: url('/images/creative/bg.png') no-repeat;
  background-size: cover;
  overflow: hidden;

  @include mobile {
    background-size: contain;
    background-position: center bottom;
    overflow: initial;
  }

  &__body {
    display: flex;
    align-items: center;
    padding-top: 100px;

    @include mobile {
      flex-direction: column;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &-word {
      align-self: center;
    }

    &-title {
      line-height: 130%;
      padding-top: 9px;
      margin-right: -200px;
      z-index: 999;

      @include tablet {
        font-size: 28px;
        margin-right: -100px;
      }

      @include mobile {
        font-size: 24px;
        padding-top: 22px;
        margin: 0;
      }
    }

    &-description {
      color: $dark-grey-color;
      line-height: 130%;
      letter-spacing: 0.07em;
      padding-top: 23px;
      margin-right: -200px;
      z-index: 999;

      @include mobile {
        font-size: 16px;
        margin: 0;
      }
    }

    &-buttons {
      display: flex;
      align-items: center;
      column-gap: 29px;
      padding-top: 44px;

      @include mobile {
        flex-direction: column;
        gap: 20px 0;

        button {
          padding-block: 13px;
          max-width: 280px;
          width: 100%;
        }
      }

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

      @include tablet {
        margin-right: -200px;
        width: 573px;
      }

      @include mobile {
        margin: 0;
        padding-top: 33px;
        margin-bottom: -50px;
        width: 372px;
      }
    }
  }
}
</style>
