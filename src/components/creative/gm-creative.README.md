# gm-creative.vue

## Использование BEM и bem-cn-lite

- Для генерации BEM-классов используется функция `b`, созданная через `bemCn('gm-creative')`.
- В шаблоне:
    - Для блока: `<div :class="b()">` → `class="gm-creative"`
    - Для элементов: `<div :class="b('body')">` → `class="gm-creative__body"`
    - Для элементов с сеткой: `<div :class="[b('body'), 'container']">` → `class="gm-creative__body container"`
    - Для модификаторов: `<div :class="b('body', { active: isActive })">` → `class="gm-creative__body gm-creative__body_active"`
---

## Пример шаблона

```vue
<template>
  <div :class="b()">
    <div :class="[b('body'), 'container']">
      <div :class="b('body-wrapper')">
        <!-- ... -->
      </div>
      <img :class="b('body-image')" ... />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import bemCn from 'bem-cn-lite'

// здесь указывается имя корневого компонента
const b = bemCn('gm-creative')
</script>
```

---

## Преимущества подхода

- Единообразие и масштабируемость CSS-классов.
- Простота поддержки и расширения.
- Лёгкая интеграция с глобальными классами (например, `container`).

---

## Структура BEM

- Блок: `gm-creative`
- Элементы: `gm-creative__body`, `gm-creative__body-wrapper`, `gm-creative__body-title`, и т.д.
- Модификаторы: `gm-creative__body_active` (пример).

---

## Советы

- Для новых элементов всегда используй функцию `b('element')`.
- Для модификаторов — второй аргумент: `b('element', { mod: true })`.
- Для совместимости с сеткой используй массив классов: `[b('body'), 'container']`.

---