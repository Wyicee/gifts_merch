<script setup lang="ts">
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import ModalWindow from '@/components/header/ModalWindow.vue';
import bemCn from 'bem-cn-lite';

import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useListStore } from "~/stores/list";


const { header } = useListStore();

const menuList = header.flatMap(list => list.menu);
const languagesList = header.flatMap(list => list.languages);

const route = useRoute();

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
      <NuxtImg :class="b('main-logo')" src="/icons/logo.svg" alt="" width="489" height="40" />
      <Input
          :class="[b('main-input'), 'hidden-tablet']"
          mods="header"
          type="search"
          placeholder="Поиск"
      />
      <Button :class="[b('main-search'), 'visible-tablet']" mods="transparent">
        <Icon name="gm-icon:search-icon" mode="svg" size="27"/>
      </Button>
      <Button :class="b('main-button')" mods="default">+380 630 130 103</Button>
      <div :class="[b('main-tab'), 'hidden-mobile']">
        <NuxtLink :class="b('main-tab-profile')" to="">
          <Icon name="gm-icon:profile" size="40" />
        </NuxtLink>
        <div :class="b('main-tab-lang')">
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
            <li v-for="item in menuList" :key="item.id" :class="b('body-menu-list-item')">
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
@import 'assets/styles/vars';
@import 'assets/styles/media';

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
        cursor: pointer;

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
