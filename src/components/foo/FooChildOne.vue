<script setup lang="ts">
import { useFooStore } from '@/stores/counter.ts'
import Button from '@/components/ui/Button.vue'

const emit = defineEmits<{
  toggle: []
}>()

const store = useFooStore()

const storeItem = store.List.slice(0, 1)
</script>

<template>
  <div class="wrapper">
    <template v-for="item in storeItem" :key="item.id">
      <Button mods="transparent" @click="emit('toggle')">
        {{ item.show ? 'Закрыть' : 'Открыть' }}
      </Button>
      <div class="wrapper__body" :class="{ expanded: item.show }">
        <Transition>
          <p class="wrapper__body-text" v-show="item.show">{{ item.text }}</p>
        </Transition>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid darkgoldenrod;
  border-radius: 3px;

  &__body {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 0.5s ease;

    &.expanded {
      grid-template-rows: 1fr;
    }

    &-text {
      min-height: 0;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: all 0.3s ease;
}
</style>
