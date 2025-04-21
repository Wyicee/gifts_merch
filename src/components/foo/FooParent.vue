<script setup lang="ts">
import FooChild from '@/components/foo/FooChild.vue'

import { useFooStore } from '@/stores/counter.ts'
import { computed } from 'vue'

import type { State } from '@/types/state.ts'

const { List } = useFooStore()

const visibleList = computed(() => {
  if (!List[0].show) {
    return [List[0]]
  }

  return List.filter((_, index) => {
    if (index === 0) {
      return true
    }
    return List[index - 1].show
  })
})

const toggleShow = (item: State) => {
  item.show = !item.show
}
</script>

<template>
  <div class="block">
    <TransitionGroup name="list">
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

  &__wrapper {
    display: grid;
    grid-template-rows: 1fr;
    transition: all 0.5s ease;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 0.6s ease;
}

.list-leave-active {
  position: absolute;
}
</style>
