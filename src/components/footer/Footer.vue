<script setup lang="ts">
import Form from '@/components/ui/Form.vue'

const socialsList = [
  { id: 1, src: 'src/assets/icons/footer/facebook.svg' },
  { id: 2, src: 'src/assets/icons/footer/instagram.svg' },
  { id: 3, src: 'src/assets/icons/footer/linkedin.svg' },
];

const categoriesCol = [
  { id: 1, name: 'Пошив' },
  { id: 2, name: 'Все товары' },
  { id: 3, name: 'Наборы' },
  { id: 4, name: 'Производство' },
];

const informationCol = [
  { id: 1, name: 'О нас' },
  { id: 2, name: 'ЧаВо' },
  { id: 3, name: 'Контакты' },
];
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="footer__body">
      <div class="footer__body-column">
        <img
          class="footer__body-column-logo"
          src="@/assets/icons/logo.svg"
          alt=""
          width="489"
          height="40"
        />
        <p class="footer__body-column-description">
          Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее
        </p>
        <div class="footer__body-column-contacts">
          <a href="tel:+380630130103" class="footer__body-column-contacts-tel">+380 630 130 103</a>
          <a href="mailto:example@gmail.com" class="footer__body-column-contacts-email">example@gmail.com</a>
        </div>
        <div class="footer__body-column-soc1als">
          <div
            class="footer__body-soc1als-item"
            v-for="item in socialsList" :key="item.id"
          >
            <router-link to="#">
              <img
                :src="item.src"
                alt=""
                width="24"
                height="24"
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="footer__body-column footer__body-list">
        <h5 class="footer__body-column-title">Категории</h5>
        <ul
          class="footer__body-column-list"
          v-for="item in categoriesCol" :key="item.id"
        >
          <li class="footer__body-column-list-item">
            <router-link
              to=""
              class="footer__body-column-list-item-link"
            >{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="footer__body-column footer__body-list">
        <h5 class="footer__body-column-title">Категории</h5>
        <ul
          class="footer__body-column-list"
          v-for="item in informationCol" :key="item.id"
        >
          <li class="footer__body-column-list-item">
            <router-link
              to=""
              class="footer__body-column-list-item-link"
            >{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="footer__body-column">
        <h5 class="footer__body-column-title">Связаться с менеджером</h5>
        <p class="footer__body-column-description">
          Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер свяжеться с вами
        </p>
        <Form type="footer" />
      </div>
    </div>
    <div class="footer__info">
      <p class="footer__info-rights">© 2022. All rights reserved.</p>
      <router-link to="" class="footer__info-politics">Политика конфиденциальности</router-link>
    </div>
  </div>
</footer>
</template>

<style scoped lang="scss">
.footer {
  background: url('@/assets/images/footer/bg.svg') no-repeat;
  background-size: cover;

  &__body {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    column-gap: 58px;

    @include laptop {
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(2, auto);
    }

    &-column {
      display: flex;
      flex-direction: column;
      align-items: start;

      &:first-child {
        &-description {
          padding-bottom: 40px;
          max-width: 439px;
        }
      }

      @include laptop {
        &:last-child {
          align-items: start;
          flex-direction: row;
          grid-area: -1 / 1;
        }
      }

      &-logo {
        padding-bottom: 15px;
      }

      &-description {
        font-size: 18px;
        color: $dark-grey-color;
        line-height: 130%;
        letter-spacing: 0.07em;
      }

      &-contacts {
        display: flex;
        flex-direction: column;
        padding-bottom: 30px;

        &-tel {
          font-weight: 600;
        }
      }

      &-soc1als {
        display: flex;
        column-gap: 21.9px;
      }

      &-list {
        &-item {
          &-link {
            font-size: 18px;
          }
        }
      }
    }

    &-list {
      display: flex;
      row-gap: 15px;
    }
  }

  &__info {
    font-size: 13px;
    color: #9FA3B2;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    padding-top: 46px;
  }
}
</style>
