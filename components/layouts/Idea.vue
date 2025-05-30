<script setup lang="ts">
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import Form from '@/components/ui/Form.vue';
import block from 'bem-cn-lite';

import { useWindowSize } from '@vueuse/core';

import { computed } from 'vue';

const { width } = useWindowSize();

const isDesktop = computed(() => width.value >= 1023.98);

const formText = computed(() =>
    width.value >= 1023.98 ? 'в течение 1 часа' : 'в течение 15 минут',
);

const b = block('idea');
</script>

<template>
  <div :class="b()">
    <div :class="[b('body'), 'container']">
      <div :class="b('body-column')">
        <h3 :class="b('body-title')">У вас своя УНИКАЛЬНАЯ идея по разработке мерча?</h3>
        <p :class="b('body-description')">
          Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с технологией
          производства, предоставим образцы матералов.
        </p>
      </div>
      <h4 :class="b('body-subtitle')">
        Введите свои контактные данные, и наш менеджер свяжется с Вами
        <span :class="{ 'text-decoration': !isDesktop }">
          <br v-if="!isDesktop">{{ formText }}</span>
      </h4>
      <div :class="b('body-column')">
        <NuxtImg
            :class="b('body-lamp')"
            src="/images/idea/lamp.png"
            alt=""
            width="432"
            height="422"
        />
        <div :class="b('body-rocket')"/>
        <div :class="b('body-curve')"/>
      </div>
      <NuxtImg :class="b('body-curve-img')" src="/images/idea/curve.svg" alt=""/>
      <Form :class="b('body-form')">
        <Input :class="b('body-form-input')" type="text" mods="idea" placeholder="Ваше Имя"/>
        <Input
            :class="b('body-form-input')"
            type="email"
            mods="idea"
            placeholder="Ваша електронная почта"
        />
        <Input
            :class="b('body-form-input')"
            type="tel"
            mods="idea"
            placeholder="Ваш номер телефона"
        />
        <Button :class="b('body-form-button')" mods="default" type="submit">Заказать</Button>
      </Form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.idea {
  background: url('/images/idea/bg.svg') no-repeat top center;
  background-size: cover;
  height: 750px;
  position: relative;
  padding-top: 100px;

  @include mobile {
    padding-top: 200px;
  }

  @include mobile-s {
    padding-top: 400px;
  }

  &__body {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas:
      'column-1 column-2'
      'subtitle column-2'
      'form form';
    align-items: center;
    align-content: center;
    gap: 60px 20px;

    @include laptop {
      grid-template-areas:
        'column-1 column-2'
        'subtitle form';
      row-gap: 35px;
      height: 100%;
    }

    @include mobile {
      grid-template-columns: auto;
      grid-template-areas:
        'column-2'
        'column-1'
        'curve'
        'subtitle'
        'form';
    }

    &-column {
      &:first-of-type {
        grid-area: column-1;
        max-width: 558px;

        @include mobile {
          text-align: center;
          justify-self: center;
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
      font-weight: 600;
      max-width: 550px;
      align-self: start;

      @include tablet {
        max-width: 320px;
      }

      @include mobile {
        font-size: 20px;
        text-align: center;
        max-width: initial;
        padding: 0;
      }

      & .text-decoration {
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
      @media (max-width: 440px) {
        @include visually-hidden;
      }

      &::after {
        content: '';
        background-image: url('/images/idea/rocket-1.svg');
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

        @include tablet {
          top: 58%;
          right: 47%;
        }

        @include mobile {
          top: 22%;
          right: 10%;
        }
      }

      &::before {
        content: '';
        background-image: url('/images/idea/rocket-2.svg');
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

        @include tablet {
          bottom: -8%;
        }

        @include mobile {
          top: 25%;
          left: 5%;
          bottom: initial;
        }
      }
    }

    &-curve {
      @include mobile {
        @include visually-hidden;
      }

      &::after {
        content: '';
        background-image: url('/images/idea/curve.svg');
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

        @include tablet {
          top: 68%;
          right: 45%;
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

      &-img {
        @include mobile-above {
          @include visually-hidden;
        }

        @include mobile {
          grid-area: curve;
          justify-self: center;
        }
      }
    }
  }

}
</style>
