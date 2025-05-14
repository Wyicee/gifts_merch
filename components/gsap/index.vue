<script setup lang="js">
import { gsap } from 'gsap'
import { ref } from 'vue'
import bemCn from "bem-cn-lite";

const box = ref(null);

const btn = ref(null)
const fill = ref(null)
let tl

const b = bemCn('container');

defineOptions({
  name: 'GmGasp',
})

onMounted(() => {
  gsap.from(box.value, {
    y: -100,
    opacity: 0,
    ease: 'expo.out',
    duration: 2,
  });

  tl = gsap.timeline({ paused: true })
      .to(fill.value, { scale: 1, duration: 0.5, ease: 'power1.out' })

  btn.value.addEventListener('mouseenter', onEnter)
  btn.value.addEventListener('mouseleave', onLeave)
});

onBeforeUnmount(() => {
  btn.value.removeEventListener('mouseenter', onEnter)
  btn.value.removeEventListener('mouseleave', onLeave)
})

const onEnter = (e) => {
  const x = e.offsetX
  gsap.set(fill.value, { transformOrigin: `${x}px center` });

  tl.play()
}

const onLeave = () => {
  tl.reverse();
}
</script>

<template>
  <div :class="b()">
    <div ref="box" :class="b('body')">Im a box</div>
    <button ref="btn" class="ripple-btn">
      <span ref="fill" class="ripple-fill" />
      Hover me
    </button>
  </div>
</template>

<style scoped lang="scss">
.ripple-btn {
  position: relative;
  overflow: hidden;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 45px;
  padding: 1em 2em;
  cursor: pointer;
}

.ripple-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  background: #2ecc71;
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
}
</style>