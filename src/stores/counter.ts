import { defineStore } from 'pinia'

import type { State } from '@/types/state.ts'

export const useFooStore = defineStore('store', {
  state: () => ({
    List: [
      {
        id: 1,
        text: 'Block-1',
        show: false,
      },
      {
        id: 2,
        text: 'Block-2',
        show: false,
      },
      {
        id: 3,
        text: 'Block-3',
        show: false,
      },
    ] as State[],
  }),
})
