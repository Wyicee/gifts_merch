<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'

import { useRoute } from 'vue-router'

interface Menu {
  id: number;
  name: string;
  path: string;
}

const route = useRoute();

const menuNames: Menu[] = [
  { id: 1, name: 'Наборы', path: '/1' },
  { id: 2, name: 'Все товары', path: '/2' },
  { id: 3, name: 'Пошив', path: '/3' },
  { id: 4, name: 'Производство', path: '/4' },
  { id: 5, name: 'Информация', path: '/5' },
];
</script>

<template>
  <header class="header container">
    <div class="header__body ">
      <img
        class="header__body-logo"
        src="@/assets/icons/logo.svg"
        alt=""
        width="489"
        height="40"
      >
      <Input
        item="search"
        input-class="header"
        placeholder="Поиск"
        class="header__body-input"
      />
      <Button class="header__body-button">+380 630 130 103</Button>
      <a class="header__body-tab hidden-mobile" href="#">
        <img
          src="@/assets/icons/profile.svg"
          alt=""
          width="40"
          height="40"
        >
      </a>
      <div class="header__body-lang hidden-mobile">
        <router-link to="#">RU</router-link>
        /
        <router-link to="#">ENG</router-link>
      </div>
  </div>
    <div class="header__bottom hidden-mobile">
      <nav class="header__bottom-menu">
          <ul class="header__bottom-menu-list">
            <li
              class="header__bottom-menu-list-item"
              :class="{ 'is-active': route.path === item.path }"
              v-for="(item, index) in menuNames" :key="index"
            >
              <router-link
                :to="item.path"
                class="header__bottom-menu-list-item-link"
              >{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
      <div class="header__bottom-promo">
          <h3 class="header__bottom-promo-title">Шопперы со скидкой - 25%</h3>
        </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  row-gap: 45px;

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 52px;

    @include laptop {
      padding-top: 35px;
      column-gap: 28px;
    }

    &-logo {
      @include laptop {
        width: 293px;
        height: 23px;
      }
    }

    &-input {
      @include laptop {
        width: auto;
      }
    }

    &-lang {
      font-size: 18px;

      @include laptop {
        font-size: 12px;
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(250, 251, 253, 0.44);

    @include tablet {
      @include visually-hidden
    }

    &-menu {
      &-list {
        display: flex;
        column-gap: 80px;

        @include laptop {
          column-gap: 40px;
        }

        &-item {
          padding-block: 40px;
          font-weight: 600;

          &.is-active {
            color: #FAFBFD;
            font-weight: 800;
            padding-inline: 30px;
            background-color: $dark-color;
          }
        }
      }
    }

    &-promo {
      display: flex;
      background: url('@/assets/images/header/banner.png');
      background-size: cover;

      &-title {
        color: $purple-color;
        padding-right: 150px;

        @include laptop {
          font-size: 24px;
          padding: 0;
        }
      }
    }
  }
}
</style>
