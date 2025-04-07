<script setup lang="ts">
import Input from '@/components/ui/input.vue'
import Button from '@/components/ui/button.vue'

import { ref } from 'vue'

const menuNames = [
  { id: 1, name: 'Наборы', },
  { id: 2, name: 'Все товары', },
  { id: 3, name: 'Пошив', },
  { id: 4, name: 'Производство', },
  { id: 5, name: 'Информация', },
]
const isActive = ref<boolean>(false);

const handleClick = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <header class="header">
    <div class="header__body">
      <img
        class="header__body-logo"
        src="@/assets/icons/logo.svg"
        alt=""
        width="489"
        height="40"
      >
      <Input class="header__body-search" />
      <Button class="header__body-button">+380 630 130 103</Button>
      <a class="header__body-tab" href="#">
        <img
          src="@/assets/icons/profile.svg"
          alt=""
          width="40"
          height="40"
        >
      </a>
      <div class="header__body-lang">
        <a href="#">RU</a>
        /
        <a href="#">ENG</a>
      </div>
    </div>
    <div class="header__bottom">
      <nav class="header__bottom-menu">
        <ul class="header__bottom-menu-list">
          <li
            class="header__bottom-menu-list-item"
            v-for="item in menuNames" :key="item.id"
          >
            <router-link
              to=""
              class="header__bottom-menu-list-item-link"
              :class="{ 'is-active': isActive }"
              @click="handleClick"
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
    padding-inline: 161px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 161px;
    background-color: rgba(250, 251, 253, 0.44);

    &-menu {
      &-list {
        display: flex;
        column-gap: 80px;

        &-item {
          padding-block: 40px 41px;
          font-weight: 600;

          &-link {
            &.is-active {
              color: #FAFBFD;
              font-weight: 800;
              padding: 41px 44px 58px;
              background-color: $dark-color;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>
