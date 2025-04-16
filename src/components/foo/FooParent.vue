<script setup lang="ts">
import FooChildOne from '@/components/foo/FooChildOne.vue'
import FooChildTwo from '@/components/foo/FooChildTwo.vue'
import FooChildThree from '@/components/foo/FooChildThree.vue'
</script>

<template>
  <div class="container">
    <FooChildOne />
    <FooChildTwo />
    <FooChildThree />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed crimson;
}
</style>
