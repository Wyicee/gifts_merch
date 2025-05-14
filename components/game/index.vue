<script setup>
import bemCn from 'bem-cn-lite';
import Button from "~/components/ui/Button.vue";
import { gsap } from 'gsap'
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

defineOptions({
  name: 'GmTicTacToe'
})

const b = bemCn('playground')

const playground = ref(null)
const cell = ref([])
const targetElement = ref(null)
const targetIsInBox = ref(false)

onMounted(() => {
  Draggable.create(targetElement.value, {
    bounds: playground.value,
    onDrag: () => {
      if (this.hitTest(cell.value, '60%')) {
        console.log('poop')
      }
    }
  });
});
</script>

<template>
  <div :class="b()">
    <div ref="playground" :class="b('body')">
      <div v-for="r in 3" :key="r" :class="b('row')">
        <div v-for="n in 3" :key="n" ref="cell" :class="b('cell')" />
      </div>
      <div :class="b('figure')">
        <div ref="targetElement" :class="b('figure-circle')"/>
      </div>
    </div>
    <Button mods="transparent" :class="b('button')">Начать заново</Button>
  </div>
</template>

<style scoped lang="scss">
.playground {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b58e67;

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1248px;
    height: 700px;
    position: relative;
  }

  &__row {
    display: flex;
    align-items: center;
  }

  &__cell {
    border: 2px solid #000;
    width: 200px;
    height: 200px;
  }

  &__figure {
    position: absolute;
    right: 0;

    &-circle {
      border: 2px solid #000;
      border-radius: 100%;
      width: 180px;
      height: 180px;
    }
  }

  &__button {
    font-size: 28px;

    &:hover {
      scale: 1.2;
    }

    &:active {
      scale: .9;
      transition-duration: .1s;
    }
  }
}
</style>