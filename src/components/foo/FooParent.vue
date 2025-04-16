<script setup lang="ts">
import FooChild from '@/components/foo/FooChild.vue'

import { useFooStore } from '@/stores/counter.ts'
import { computed } from 'vue'

import type { State } from '@/types/state.ts'

const store = useFooStore()

const visibleList = computed(() => {
  const list = store.List
  if (!list[0].show) {
    return [list[0]]
  }

  return store.List.filter((_, index) => {
    if (index === 0) {
      return true
    }
    return store.List[index - 1].show
  })
})

const toggleShow = (item: State) => {
  item.show = !item.show
}
</script>

<template>
  <div class="block">
    <TransitionGroup name="list" mode="in-out">
      <div class="block__wrapper" v-for="item in visibleList" :key="item.id">
        <FooChild :item="item" @toggle="toggleShow(item)" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;

  &__wrapper {
    display: grid;
    grid-template-rows: 1fr;
    transition: all 0.5s ease;
  }
}

.list-move, /* применять переход к движущимся элементам */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>
