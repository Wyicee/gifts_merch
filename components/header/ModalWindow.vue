<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import bemCn from 'bem-cn-lite';

import { ref } from 'vue';
import { useListStore } from "~/stores/list";

const { footer, header } = useListStore();

// ЧТОБЫ ДВА РАЗА НЕ СОЗДАВАТЬ SAME МАССИВ, Я ВЗЯЛ ИЗ FOOTER
const socialsList = footer.flatMap(list => list.socials);

const routingList = header
    .flatMap(list => list.modalWindow)
    .flatMap(modalList => modalList.routing);

const emit = defineEmits<{
  closeModal: []
}>();

const activeItemId = ref<number>(1);

const handleClick = (id: number) => {
  activeItemId.value = activeItemId.value === id ? 0 : id;
};

const b = bemCn('modal');
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <div :class="b('body-tabs')">
        <div :class="b('body-tabs-lang')">
          <Button disabled mods="transparent">RU</Button>
          /
          <Button mods="transparent">ENG</Button>
        </div>
        <router-link :class="b('body-tabs-profile')" to="">
          <img src="/icons/header/profile.svg" alt="" width="40" height="40">
        </router-link>
        <Button :class="b('body-tabs-close')" mods="transparent" @click.esc="emit('closeModal')">
          <img src="/icons/header/close.svg" alt="">
        </Button>
      </div>
      <ul :class="b('body-list')">
        <li v-for="item in routingList" :key="item.id" :class="b('body-list-item')">
          <router-link
              :class="b('body-list-item-link', { 'is-active': activeItemId === item.id })"
              to=""
              @click="handleClick(item.id)"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div :class="b('body-contacts')">
        <a href="mailto:example@gmail.com">example@gmail.com</a>
        <Button :class="b('body-main-button')" mods="default">+380 630 130 103</Button>
      </div>
      <ul :class="b('body-socials')">
        <li v-for="item in socialsList" :key="item.id" :class="b('body-socials')">
          <a :class="b('body-socials-item')" target="_blank" :href="item.href">
            <img :src="item.img" alt="" width="25" height="25">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
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
  z-index: 999;

  &__body {
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

        &-link {
          white-space: pre-line;

          &_is-active {
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
