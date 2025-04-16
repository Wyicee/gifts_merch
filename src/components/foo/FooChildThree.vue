<script setup lang="ts">
import { useFooStore } from '@/stores/counter.ts'
import Button from '@/components/ui/Button.vue'

import type { State } from '@/types/state.ts'

const store = useFooStore()

const storeItem = store.List.slice(2, 3)

const toggleShow = (item: State) => {
  item.show = !item.show
}
</script>

<template>
  <div v-for="item in storeItem" :key="item.id">
    <Transition>
      <p v-show="item.show">{{ item.text }}</p>
    </Transition>
    <Button mods="transparent" @click="toggleShow(item)">{{
      item.show ? 'Закрыть' : 'Открыть'
    }}</Button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid darkgoldenrod;
  border-radius: 3px;
}

.v-enter-active {
  transition: all 0.4s ease;
}

.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
