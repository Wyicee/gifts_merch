<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Form from '@/components/ui/Form.vue'

import { useWindowSize } from '@vueuse/core'

import { computed, ref, watchEffect } from 'vue'

const { width } = useWindowSize()
const isDesktop = ref(false)

watchEffect(() => {
  isDesktop.value = width.value >= 1023.98
})

const formText = computed(() => (isDesktop.value ? 'в течение 1 часа' : 'в течение 15 минут'))
</script>

<template>
  <div class="idea">
    <div class="idea__body container">
      <div class="idea__body-column">
        <h3 class="idea__body-title">У вас своя УНИКАЛЬНАЯ идея по разработке мерча?</h3>
        <p class="idea__body-description">
          Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с технологией
          производства, предоставим образцы матералов.
        </p>
      </div>
      <h4 class="idea__body-subtitle">
        Введите свои контактные данные, и наш менеджер свяжется с Вами
        <span :class="{ 'text-decoration': !isDesktop }"
          ><br v-if="!isDesktop" />{{ formText }}</span
        >
      </h4>
      <div class="idea__body-column">
        <img
          class="idea__body-lamp"
          src="@/assets/images/idea/lamp.png"
          alt=""
          width="432"
          height="422"
        />
        <div class="idea__body-rocket"></div>
        <div class="idea__body-curve"></div>
      </div>
      <Form class="idea__body-form">
        <Input class="idea__body-form-input" type="text" mods="idea" placeholder="Ваше Имя" />
        <Input
          class="idea__body-form-input"
          type="email"
          mods="idea"
          placeholder="Ваша електронная почта"
        />
        <Input
          class="idea__body-form-input"
          type="tel"
          mods="idea"
          placeholder="Ваш номер телефона"
        />
        <Button class="idea__body-form-button" mods="default" type="submit">Заказать</Button>
      </Form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.idea {
  background: url('@/assets/images/idea/bg.svg') no-repeat top center;
  background-size: cover;
  height: 100%;
  position: relative;

  &__body {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas:
      'column-1 column-2'
      'subtitle column-2'
      'form form';
    align-items: center;
    align-content: center;
    padding-block: 43px;
    gap: 60px 20px;

    @include laptop {
      grid-template-areas:
        'column-1 column-2'
        'subtitle form';
      row-gap: 35px;
    }

    @include mobile {
      grid-template-columns: auto;
      grid-template-areas:
        'column-2'
        'column-1'
        'subtitle'
        'form';
    }

    &-column {
      &:first-of-type {
        grid-area: column-1;
        max-width: 558px;

        @include mobile {
          text-align: center;
        }
      }

      &:last-of-type {
        grid-area: column-2;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        @include laptop {
          position: initial;
        }
      }
    }

    &-lamp {
      @include mobile {
        width: 242px;
        height: 237px;
      }
    }

    &-title {
      line-height: 130%;
      letter-spacing: 0.04em;
      padding-bottom: 17px;

      @include mobile {
        font-size: 28px;
      }
    }

    &-description {
      font-size: 18px;
      line-height: 130%;
      letter-spacing: 0.07em;
      color: $dark-grey-color;

      @include mobile {
        font-size: 16px;
      }
    }

    &-subtitle {
      grid-area: subtitle;
      max-width: 550px;
      align-self: start;

      @include tablet {
        max-width: 300px;
      }

      @include mobile {
        font-size: 20px;
        text-align: center;
        max-width: initial;
        padding-top: 40px;
      }

      .text-decoration {
        color: #1fab8a;
      }
    }

    &-form {
      grid-area: form;
      grid-column: -1 / 1;
      display: flex;
      align-items: end;
      gap: 35px 0;

      @include laptop {
        grid-column: auto;
        flex-direction: column;
        align-items: start;
      }

      &-input {
        width: 100%;
      }

      &-button {
        max-width: 280px;
        width: 100%;
      }
    }

    &-rocket {
      &::after {
        content: '';
        background-image: url('@/assets/images/idea/rocket-1.svg');
        background-size: cover;
        width: 89px;
        height: 142px;
        position: absolute;
        left: 0;

        @include laptop {
          width: 41px;
          height: 66px;
          right: 50%;
          top: 50%;
          left: initial;
        }

        @include mobile {
          top: 22%;
          right: 10%;
        }
      }

      &::before {
        content: '';
        background-image: url('@/assets/images/idea/rocket-2.svg');
        background-size: cover;
        width: 126px;
        height: 177px;
        position: absolute;
        right: 0;
        top: 0;

        @include laptop {
          width: 59px;
          height: 83px;
          bottom: 3%;
          left: 0;
          right: initial;
          top: initial;
        }

        @include mobile {
          top: 25%;
          left: 5%;
          bottom: initial;
        }
      }
    }

    &-curve {
      &::after {
        content: '';
        background-image: url('@/assets/images/idea/curve.svg');
        background-size: cover;
        width: 87px;
        height: 41px;
        position: absolute;
        left: 30px;
        bottom: 0;

        @include laptop {
          width: 40px;
          height: 19px;
          right: 48%;
          top: 62%;
          left: initial;
          bottom: initial;
        }

        @include mobile {
          width: 103px;
          height: 49px;
          right: 40%;
          top: 52%;
        }

        @include mobile-s {
          right: 35%;
          top: 55%;
        }
      }
    }
  }
}
</style>
