<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

import { ref } from 'vue'

interface List {
  id: number
  name: string
}

const routingList: List[] = [
  { id: 1, name: 'Толстовки' },
  { id: 2, name: 'Бананки' },
  { id: 3, name: 'Свитшоты' },
  { id: 4, name: 'Эко-сумки/\nШопперы' },
  { id: 5, name: 'Футболки' },
  { id: 6, name: 'Пледы' },
  { id: 7, name: 'Поло' },
  { id: 8, name: 'Носки' },
  { id: 9, name: 'Жилетки' },
  { id: 10, name: 'Маски' },
  { id: 11, name: 'Рюкзаки' },
]
const socialsList = [
  { id: 1, img: 'src/assets/icons/footer/facebook.svg', href: 'https://www.facebook.com' },
  { id: 2, img: 'src/assets/icons/footer/instagram.svg', href: 'https://www.instagram.com' },
  { id: 3, img: 'src/assets/icons/footer/linkedin.svg', href: 'https://www.linkedin.com' },
]

const emit = defineEmits<{
  closeModal: []
}>()

const activeItemId = ref<number>(1)

const handleClick = (id: number) => {
  activeItemId.value = activeItemId.value === id ? 0 : id
}
</script>

<template>
  <div class="window">
    <div class="window__body">
      <div class="window__body-tabs">
        <div class="window__body-tabs-lang">
          <Button disabled mods="transparent">RU</Button>
          /
          <Button mods="transparent">ENG</Button>
        </div>
        <router-link class="window__body-tabs-profile" to="">
          <img src="@/assets/icons/header/profile.svg" alt="" width="40" height="40" />
        </router-link>
        <Button class="window__body-tabs-close" mods="transparent" @click.esc="emit('closeModal')">
          <img src="@/assets/icons/header/close.svg" alt="" />
        </Button>
      </div>
      <ul class="window__body-list">
        <li class="window__body-list-item" v-for="item in routingList" :key="item.id">
          <router-link
            :class="{ 'is-active': activeItemId === item.id }"
            @click="handleClick(item.id)"
            to=""
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="window__body-contacts">
        <a href="mailto:example@gmail.com">example@gmail.com</a>
        <Button class="header__main-button" mods="default">+380 630 130 103</Button>
      </div>
      <ul class="window__body-socials">
        <li class="window__body-socials-item" v-for="item in socialsList" :key="item.id">
          <a class="footer__body-info-soc1als-item" target="_blank" :href="item.href">
            <img :src="item.img" alt="" width="25" height="25" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.window {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  width: 100%;
  height: 100%;
  background: rgba(33, 33, 33, 0.36);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .window__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding-block: 40px;
    border-radius: 0 0 6px 6px;
    background-color: #fff;

    &-tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 18px;
      width: 100%;

      &-lang {
        display: flex;
        align-items: center;
        font-size: 12px;
      }

      &-profile {
        img {
          width: 24px;
          height: 24px;
        }
      }

      &-close {
        margin-left: 20px;
      }
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-items: start;
      gap: 14px 36px;
      padding-top: 24px;

      &-item {
        font-size: 12px;
        font-weight: 600;
        color: #8e8e8e;

        a {
          white-space: pre-line;

          &.is-active {
            color: #000;
          }
        }
      }
    }

    &-contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      row-gap: 25px;
      padding-top: 43px;
    }

    &-socials {
      display: flex;
      align-items: center;
      column-gap: 18px;
      padding-top: 11px;
    }
  }
}
</style>
