<script setup lang="ts">
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import ModalWindow from '@/components/header/ModalWindow.vue';
import bemCn from 'bem-cn-lite';

import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

interface Menu {
  id: number;
  name: string;
  path: string;
}

interface Languages {
  id: number;
  lang: string;
}

const route = useRoute();

const menuNames: Menu[] = [
  { id: 1, name: 'Наборы', path: '/1' },
  { id: 2, name: 'Все товары', path: '/2' },
  { id: 3, name: 'Пошив', path: '/3' },
  { id: 4, name: 'Производство', path: '/4' },
  { id: 5, name: 'Информация', path: '/5' },
];

const lang: Languages[] = [
  { id: 1, lang: 'RU' },
  { id: 2, lang: 'ENG' },
];

const activeLang = ref<number | null>(1);
const isOpen = ref(false);

const handleCLick = (id: number) => {
  activeLang.value = activeLang.value === id ? null : id;
};

watch(isOpen, (newValue: boolean) => {
  document.documentElement.classList.toggle('is-lock', newValue);
});

const b = bemCn('header');
</script>

<template>
  <div :class="b()">
    <div :class="[b('main'), 'container']">
      <img :class="b('main-logo')" src="/icons/logo.svg" alt="" width="489" height="40">
      <Input
          :class="[b('main-input'), 'hidden-tablet']"
          mods="header"
          type="search"
          placeholder="Поиск"
      />
      <Button :class="[b('main-search'), 'visible-tablet']" mods="transparent">
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.6089 15.2367C19.3581 11.7059 19.1098 6.59769 15.864 3.35186C12.3492 -0.16286 6.65076 -0.162859 3.13604 3.35186C-0.37868 6.86658 -0.37868 12.5651 3.13604 16.0798C6.38187 19.3256 11.4901 19.5739 15.0209 16.8247C15.0361 16.8419 15.052 16.8588 15.0685 16.8753L19.8414 21.6482C20.2808 22.0876 20.9931 22.0876 21.4324 21.6482C21.8718 21.2089 21.8718 20.4966 21.4324 20.0573L16.6595 15.2843C16.643 15.2678 16.6261 15.252 16.6089 15.2367ZM14.273 4.94285C16.909 7.57889 16.909 11.8528 14.273 14.4888C11.6369 17.1248 7.36307 17.1248 4.72703 14.4888C2.09099 11.8528 2.09099 7.57889 4.72703 4.94285C7.36307 2.30681 11.6369 2.30681 14.273 4.94285Z"
              fill="#272525"
          />
        </svg>
      </Button>
      <Button :class="b('main-button')" mods="default">+380 630 130 103</Button>
      <div :class="[b('main-tab'), 'hidden-mobile']">
        <NuxtLink :class="b('main-tab-profile')" to="">
          <img src="/icons/header/profile.svg" alt="" width="40" height="40">
        </NuxtLink>
        <div :class="b('main-tab-lang')">
          <Button
              v-for="item in lang"
              :key="item.id"
              mods="transparent"
              :disabled="activeLang === item.id"
              @update:model-value="handleCLick(item.id)"
          >
            {{ item.lang }}
          </Button>
        </div>
      </div>
      <div
          :class="[b('main-burger'), 'visible-mobile']"
          aria-label="Open menu"
          title="Open menu"
          @click="isOpen = true"
      >
        <span :class="b('main-burger-line')"/>
        <span :class="b('main-burger-line')"/>
        <span :class="b('main-burger-line')"/>
      </div>
    </div>
    <div :class="b('body-background')">
      <div :class="[b('body'), 'container']">
        <nav :class="b('body-menu')" class="header__body-menu">
          <ul :class="b('body-menu-list')">
            <li v-for="item in menuNames" :key="item.id" :class="b('body-menu-list-item')">
              <NuxtLink
                  :class="b('body-menu-list-item-link', { 'is-active': route.path === item.path })"
                  to="/"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div :class="b('body-promo')">
          <h3 :class="b('body-promo-title')">Шопперы со скидкой - 25%</h3>
        </div>
        <div :class="b('body-background-banner')"/>
      </div>
    </div>
  </div>
  <Transition name="modal" appear>
    <Teleport v-if="isOpen" to="#teleports" defer>
      <ModalWindow @close-modal="isOpen = false"/>
    </Teleport>
  </Transition>
</template>

<style scoped lang="scss">
.header {
  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 22px;
    padding-block: 52px 45px;

    &-logo {
      @include laptop {
        width: 293px;
      }

      @include tablet {
        flex-grow: 1;
      }

      @include mobile-s {
        width: 130px;
      }
    }

    &-input {
      background-color: initial;
      width: 100%;
    }

    &-search {
      display: flex;
      align-items: center;

      svg {
        color: #000;
      }
    }

    &-button {
      @include custom-640px {
        display: none !important;
      }
    }

    &-tab {
      display: flex;
      align-items: center;
      column-gap: 39px;

      &-profile {
        width: 40px;
        height: 40px;

        @include laptop {
          width: 24px;
          height: 24px;
        }
      }

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
    }

    &-burger {
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      cursor: pointer;

      &-line {
        width: 28px;
        height: 2px;
        background-color: $dark-color;
        border-radius: $bor-radius-90;
      }
    }
  }

  &__body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 75px;
    position: relative;

    @include custom-998px {
      display: none !important;
    }

    &-background {
      background: rgba(250, 251, 253, 0.44);
      overflow: hidden;

      &-banner {
        @include custom-998px {
          display: none !important;
        }

        &::after {
          content: url('/images/header/banner.png');
          position: absolute;
          right: 0;
          top: 0;
          pointer-events: none;
        }
      }
    }

    &-menu {
      &-list {
        display: flex;
        align-items: center;
        column-gap: 20px;

        @include laptop {
          column-gap: 10px;
        }

        &-item {
          font-size: 18px;
          font-weight: 600;
          text-wrap: nowrap;

          &-link {
            padding: 40px 35px;

            @include laptop {
              padding: 30px 20px;
            }

            &.is-active {
              background-color: $dark-color;
              color: #fff;
              border-radius: $bor-radius-6;
            }
          }
        }
      }
    }

    &-promo {
      &-title {
        color: $purple-color;
        text-wrap: nowrap;

        @include laptop {
          font-size: 24px;
          text-wrap: wrap;
          width: 194px;
        }
      }
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
