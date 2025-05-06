import { defineStore } from 'pinia';

export const useListStore = defineStore('list', {
  state: () => ({
    footer: [
      {
        socials: [
          {
            id: 1, img: '/icons/footer/facebook.svg',
            href: 'https://www.facebook.com'
          },
          {
            id: 2, img: '/icons/footer/instagram.svg',
            href: 'https://www.instagram.com'
          },
          {
            id: 3, img: '/icons/footer/linkedin.svg',
            href: 'https://www.linkedin.com'
          }
        ],
        categories: [
          { id: 1, name: 'Пошив' },
          { id: 2, name: 'Все товары' },
          { id: 3, name: 'Наборы' },
          { id: 4, name: 'Производство' }
        ],
        information: [
          { id: 1, name: 'О нас' },
          { id: 2, name: 'ЧаВо' },
          { id: 3, name: 'Контакты' }
        ],
      }
    ],
    header: [
      {
        menu: [
          { id: 1, name: 'Наборы', path: '/1' },
          { id: 2, name: 'Все товары', path: '/2' },
          { id: 3, name: 'Пошив', path: '/3' },
          { id: 4, name: 'Производство', path: '/4' },
          { id: 5, name: 'Информация', path: '/5' },
        ],
        languages: [
          { id: 1, lang: 'RU' },
          { id: 2, lang: 'ENG' },
        ],
        modalWindow: [
          {
            routing: [
              { id: 1, name: 'Толстовки' },
              { id: 2, name: 'Бананки' },
              { id: 3, name: 'Свитшоты' },
              { id: 4, name: 'Эко-сумки/\nШопперы' },
              { id: 5, name: 'Футболки' },
              { id: 6, name: 'Пледы' },
              { id: 7, name: 'Поло' },
              { id: 8, name: 'Носки' },
              { id: 9, name: 'Жилетки' },
              { id: 10, name: 'Маски' },
              { id: 11, name: 'Рюкзаки' },
            ]
          }
        ]
      }
    ],
    hero: [
      {
        preferences: [
          `Высокое\n качество <strong>ONLY</strong>`,
          `Поддержка\n менеджера <strong>24/7</strong>`,
          `Выполнение заказа\n в <strong>TURBO-режиме</strong>`,
        ],
      }
    ],
    collab: [
      {
        logos: [
          {
            id: 1,
            src: '/images/collab/nike.png',
            alt: 'NIKE',
          },
          {
            id: 2,
            src: '/images/collab/coca-cola.png',
            alt: 'COCA-COLA',
          },
          {
            id: 3,
            src: '/images/collab/atlas.png',
            alt: 'ATLAS',
          },
          {
            id: 4,
            src: '/images/collab/megogo.png',
            alt: 'MEGOGO',
          },
          {
            id: 5,
            src: '/images/collab/crazybox.png',
            alt: 'CRAZYBOX',
          },
        ]
      }
    ]
  }),
});
