<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Form from '@/components/ui/Form.vue'
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
        <h4 class="idea__body-subtitle">
          Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа
        </h4>
      </div>
      <div class="idea__body-column">
        <img
          src="@/assets/images/idea/lamp.svg"
          alt=""
          class="idea__body-lamp"
          width="432"
          height="422"
        />
        <span class="idea__body-rocket"></span>
        <span class="idea__body-curve"></span>
      </div>
      <Form class="idea__body-form" direction="row">
        <Input type="text" mods="idea" placeholder="Ваше Имя" />
        <Input type="email" mods="idea" placeholder="Ваша електронная почта" />
        <Input type="tel" mods="idea" placeholder="Ваш номер телефона" />
        <Button mods="default" type="submit">Заказать</Button>
      </Form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.idea {
  background: url('@/assets/images/idea/bg.svg') no-repeat top center;
  background-size: cover;
  height: 100%;

  &__body {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      'column-1 column-2'
      'column-1 column-2'
      'form form';
    align-items: center;
    align-content: center;
    padding-block: 43px;

    &-column {
      &:first-of-type {
        grid-area: column-1;
        max-width: 558px;
      }

      &:last-of-type {
        grid-area: column-2;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }

    &-title {
      line-height: 130%;
      letter-spacing: 0.04em;
      padding-bottom: 17px;
    }

    &-description {
      font-size: 18px;
      line-height: 130%;
      letter-spacing: 0.07em;
      color: $dark-grey-color;
      padding-bottom: 92px;
    }

    &-form {
      grid-area: form;
      grid-column: -1 / 1;
      display: flex;
      column-gap: 30px;
      align-items: end;

      & input:last-of-type {
        margin-right: 66px;
      }
    }

    &-rocket {
      &::after {
        content: url('@/assets/images/idea/rocket-1.svg');
        position: absolute;
        left: 0;
        bottom: 50px;
      }

      &::before {
        content: url('@/assets/images/idea/rocket-2.svg');
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    &-curve {
      &::after {
        content: url('@/assets/images/idea/curve.svg');
        position: absolute;
        left: 30px;
        bottom: 0;
      }
    }
  }
}
</style>
