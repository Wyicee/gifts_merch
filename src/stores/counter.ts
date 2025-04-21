import { defineStore } from 'pinia'

import type { State } from '@/types/state.ts'
import type { LogosProps } from '@/types/logosProps.ts'

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
    LogosList: [
      {
        id: 1,
        src: 'src/assets/images/collab/nike.png',
      },
      {
        id: 2,
        src: 'src/assets/images/collab/coca-cola.png',
      },
      {
        id: 3,
        src: 'src/assets/images/collab/atlas.png',
      },
      {
        id: 4,
        src: 'src/assets/images/collab/megogo.png',
      },
      {
        id: 5,
        src: 'src/assets/images/collab/crazybox.png',
      },
    ] as LogosProps[],
  }),
})
