import { defineStore } from 'pinia';

import type { LogosProps } from '@/types/logosProps.ts';

export const useLogosStore = defineStore('logos', {
  state: () => ({
    LogosList: [
      {
        id: 1,
        src: 'src/assets/images/collab/nike.png',
        alt: 'NIKE',
      },
      {
        id: 2,
        src: 'src/assets/images/collab/coca-cola.png',
        alt: 'COCA-COLA',
      },
      {
        id: 3,
        src: 'src/assets/images/collab/atlas.png',
        alt: 'ATLAS',
      },
      {
        id: 4,
        src: 'src/assets/images/collab/megogo.png',
        alt: 'MEGOGO',
      },
      {
        id: 5,
        src: 'src/assets/images/collab/crazybox.png',
        alt: 'CRAZYBOX',
      },
    ] as LogosProps[],
  }),
});
