<script setup lang="ts">
import Form from '@/components/ui/Form.vue'
import Input from '@/components/ui/Input.vue'
import bemCn from 'bem-cn-lite'

const socialsList = [
  { id: 1, img: '/icons/footer/facebook.svg', href: 'https://www.facebook.com' },
  { id: 2, img: '/icons/footer/instagram.svg', href: 'https://www.instagram.com' },
  { id: 3, img: '/icons/footer/linkedin.svg', href: 'https://www.linkedin.com' }
]

const categoriesCol = [
  { id: 1, name: 'Пошив' },
  { id: 2, name: 'Все товары' },
  { id: 3, name: 'Наборы' },
  { id: 4, name: 'Производство' }
]

const informationCol = [
  { id: 1, name: 'О нас' },
  { id: 2, name: 'ЧаВо' },
  { id: 3, name: 'Контакты' }
]

const b = bemCn('footer')
</script>

<template>
  <footer :class="b()">
    <div :class="[b('body'), 'container']">
      <div :class="b('body-info')">
        <div :class="b('body-info-column-mobile')">
          <img
            :class="b('body-info-logo')"
            src="/icons/logo.svg"
            alt=""
            width="489"
            height="40"
          >
          <p :class="b('body-info-description')">
            Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее
          </p>
        </div>
        <div :class="b('body-info-column-mobile')">
          <div :class="b('body-info-contacts')">
            <a href="tel:+380630130103" :class="b('body-info-contacts-tel')"> +380 630 130 103 </a>
            <a href="mailto:example@gmail.com" :class="b('body-info-contacts-email')">
              example@gmail.com
            </a>
          </div>
          <div :class="b('body-info-soc1als')">
            <a
              v-for="item in socialsList"
              :key="item.id"
              :class="b('body-info-soc1als-item')"
              target="_blank"
              :href="item.href"
            >
              <img :src="item.img" alt="" width="25" height="25" >
            </a>
          </div>
        </div>
      </div>
      <ul :class="b('body-list')">
        <li :class="b('body-list-item-title')">Категории</li>
        <li v-for="item in categoriesCol" :key="item.id" :class="b('body-list-item')">
          <router-link to="" :class="b('body-list-item-link')">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <ul :class="b('body-list')">
        <li :class="b('body-list-item-title')">Информация</li>
        <li v-for="item in informationCol" :key="item.id" :class="b('body-list-item')">
          <router-link to="" :class="b('body-list-item-link')">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div :class="b('body-column-mobile')">
        <div :class="b('body-info-contacts')">
          <a href="tel:+380630130103" :class="b('body-info-contacts-tel')"> +380 630 130 103 </a>
          <a href="mailto:example@gmail.com" :class="b('body-info-contacts-email')">
            example@gmail.com
          </a>
        </div>
        <div :class="b('body-info-soc1als')">
          <a
            v-for="item in socialsList"
            :key="item.id"
            :class="b('body-info-soc1als-item')"
            target="_blank"
            :href="item.href"
          >
            <img :src="item.img" alt="" width="25" height="25" >
          </a>
        </div>
      </div>
      <div :class="b('body-form')">
        <Form direction="column">
          <h4 :class="b('body-form-title')">Связаться с менеджером</h4>
          <p :class="b('body-form-description')">
            Есть вопрос на который не нашли ответ?<br >
            Оставьте контакт и наш менеджер свяжеться с вами
          </p>
          <Input
            :class="b('body-form-input')"
            mods="footer"
            type="tel"
            placeholder="Номер телефона"
          />
        </Form>
      </div>
    </div>
    <div :class="b('body-copyright')">
      <p>© 2022. All rights reserved.</p>
      <router-link to="">Политика конфиденциальности</router-link>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: url('/images/footer/bg.svg') no-repeat;
  background-size: cover;

  &__body {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    align-items: start;
    column-gap: 58px;
    padding-bottom: 46px;
    padding-top: 100px;

    @include tablet {
      grid-template-columns: repeat(3, auto);
      padding-bottom: 37px;
    }

    @include mobile {
      grid-template-areas:
        'info info info'
        'list-1 list-2 form';
      padding-top: 70px;
    }

    @include custom-620px {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'info info'
        'list-1 list-2'
        'contacts contacts'
        'form form';
      justify-content: normal;
      gap: 0;
    }

    @include mobile-s {
      column-gap: 21px;
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: start;

      @include mobile {
        grid-area: info;
        flex-direction: row;
        justify-content: space-between;

        &-column-mobile {
          display: flex;
          flex-direction: column;

          &:last-child {
            @include custom-620px {
              display: none !important;
            }
          }
        }
      }

      &-logo {
        padding-bottom: 15px;

        @include mobile {
          width: 277px;
          padding-bottom: 9px;
        }

        @include mobile-s {
          align-self: center;
        }
      }

      &-description {
        font-size: 18px;
        line-height: 130%;
        letter-spacing: 0.07em;
        color: $dark-grey-color;
        max-width: 410px;
        padding-bottom: 40px;

        @include custom-620px {
          padding-bottom: 21px;
        }

        @include mobile-s {
          font-size: 12px;
          text-align: center;
          padding-bottom: 29px;
        }
      }

      &-contacts {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-bottom: 30px;

        @include mobile {
          padding-bottom: 28px;
        }

        @include custom-620px {
          font-size: 18px;
        }

        &-tel {
          font-weight: 600;
          height: 19px;
        }

        &-email {
          text-decoration: underline;
          height: 19px;
        }
      }

      &-soc1als {
        display: flex;
        column-gap: 22px;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      align-items: start;
      row-gap: 15px;

      @include mobile {
        &:first-child {
          grid-area: list-1;
        }

        &:last-child {
          grid-area: list-2;
        }
      }

      &-item {
        &-title {
          font-size: 20px;
          font-weight: 600;
        }

        &-link {
          font-size: 18px;
        }
      }
    }

    &-column-mobile {
      grid-column: -1 / 1;
      grid-area: contacts;
      display: flex;
      align-items: center;
      column-gap: 68px;
      padding-block: 30px 32px;

      @include mobile-s {
        padding-block: 33px 42px;
      }

      .footer__body-info-contacts {
        align-self: center;
        padding: 0;

        @include mobile-s {
          align-items: center;
        }

        &-tel {
          height: 22px;
        }

        &-email {
          height: 22px;
        }
      }

      .footer__body-info-soc1als {
        column-gap: 30px;
        align-self: center;

        &-item img {
          width: 34px;
          height: auto;
        }
      }

      @include custom-620px-above {
        display: none !important;
      }

      @include mobile-s {
        flex-direction: column;
        gap: 41px 0;
      }
    }

    &-form {
      display: flex;
      flex-direction: column;
      align-items: start;

      @include tablet {
        grid-column: -1 / 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 46px;
      }

      @include mobile {
        flex-direction: column;
        align-items: start;
        grid-column: auto;
        padding: 0;
      }

      @include custom-620px {
        grid-column: -1 / 1;
      }

      @include mobile-s {
        justify-self: center;
        align-items: center;
        text-align: center;
      }

      &-description {
        font-size: 16px;
        line-height: 164%;
        color: #8f90a6;
        max-width: 280px;
        padding-bottom: 22px;

        @include tablet {
          max-width: inherit;
          padding: 0;
        }

        @include mobile {
          font-size: 14px;
          padding-bottom: 20px;
        }

        @include mobile-s {
          font-size: 12px;
          padding-bottom: 8px;
        }
      }
    }

    &-copyright {
      display: flex;
      justify-content: center;
      font-size: 13px;
      color: #9fa3b2;
      padding-bottom: 39px;
      column-gap: 5px;

      @include mobile-s {
        flex-direction: column;
        align-items: center;
        gap: 3px 0;
      }

      & a:last-child {
        text-decoration: underline;
      }
    }
  }
}
</style>
