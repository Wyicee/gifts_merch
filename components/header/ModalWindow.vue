<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import block from 'bem-cn-lite';

import { ref } from 'vue';
import { useListStore } from "~/stores/list";

const { footer, header } = useListStore();

// ЧТОБЫ ДВА РАЗА НЕ СОЗДАВАТЬ SAME МАССИВ, Я ВЗЯЛ ИЗ FOOTER
const socialsList = footer.flatMap(list => list.socials);
const languagesList = header.flatMap(list => list.languages);

const routingList = header
    .flatMap(list => list.modalWindow)
    .flatMap(modalList => modalList.routing);

const emit = defineEmits<{
  closeModal: []
}>();

const activeItemId = ref<number>(1);
const activeLang = ref<number | null>(1);

const handleCLick = (id: number) => {
  activeLang.value = activeLang.value === id ? null : id;
};

const handleClick = (id: number) => {
  activeItemId.value = activeItemId.value === id ? 0 : id;
};

const b = block('modal');
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <div :class="b('body-tabs')">
        <div :class="b('body-tabs-lang')">
          <Button
              v-for="item in languagesList"
              :key="item.id"
              mods="transparent"
              :disabled="activeLang === item.id"
              @update:model-value="handleCLick(item.id)"
          >
            {{ item.lang }}
          </Button>
        </div>
        <NuxtLink :class="b('body-tabs-profile')" to="">
          <Icon name="gm-icon:profile" size="24" mode="svg"/>
        </NuxtLink>
        <Button :class="b('body-tabs-close')" mods="transparent" @click.esc="emit('closeModal')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7138 8.28999C15.5261 8.10068 15.2705 7.99419 15.0038 7.99419C14.7372 7.99419 14.4816 8.10068 14.2938 8.28999L12.0038 10.59L9.71385 8.28999C9.32172 7.89787 8.68597 7.89787 8.29385 8.28999C7.90172 8.68211 7.90172 9.31787 8.29385 9.70999L10.5938 12L8.29385 14.29C8.10453 14.4778 7.99805 14.7334 7.99805 15C7.99805 15.2666 8.10453 15.5222 8.29385 15.71C8.48161 15.8993 8.73721 16.0058 9.00385 16.0058C9.27048 16.0058 9.52608 15.8993 9.71385 15.71L12.0038 13.41L14.2938 15.71C14.4816 15.8993 14.7372 16.0058 15.0038 16.0058C15.2705 16.0058 15.5261 15.8993 15.7138 15.71C15.9032 15.5222 16.0096 15.2666 16.0096 15C16.0096 14.7334 15.9032 14.4778 15.7138 14.29L13.4138 12L15.7138 9.70999C15.9032 9.52222 16.0096 9.26663 16.0096 8.99999C16.0096 8.73335 15.9032 8.47775 15.7138 8.28999ZM19.074 4.92984C16.5632 2.33027 12.8452 1.28771 9.34892 2.20287C5.85262 3.11802 3.12217 5.84847 2.20702 9.34477C1.29186 12.8411 2.33442 16.5591 4.93399 19.0698C7.44473 21.6694 11.1628 22.712 14.6591 21.7968C18.1554 20.8817 20.8858 18.1512 21.801 14.6549C22.7161 11.1586 21.6736 7.44058 19.074 4.92984ZM17.6651 17.6599C14.968 20.36 10.7392 20.779 7.56464 18.6607C4.3901 16.5423 3.15392 12.4766 4.61203 8.9497C6.07015 5.42281 9.81649 3.41697 13.5601 4.15879C17.3038 4.90061 20.0021 8.1835 20.0051 11.9999C20.0123 14.1234 19.1697 16.1615 17.6651 17.6599Z" fill="#3E3E3E"/>
          </svg>
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
            <Icon :name="`gm-icon:${item.icon}`" :size="item.size"/>
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

        button {
          color: #8e8e8e;
          line-height: 105%;
          display: flex;
          column-gap: 2px;
          align-items: center;

          &:first-child {
            &::after {
              content: '/';
              margin-left: 5px;
            }
          }

          &:disabled {
            color: $dark-color;
            font-weight: 600;
          }

          @include tablet {
            font-size: 14px;
          }
        }
      }

      &-profile {
        cursor: pointer;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      &-close {
        display: flex;
        align-items: center;
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
