<script setup lang="ts">
</script>

<template>
  <input
    type="search"
    name="search"
    id="search"
    placeholder="Поиск"
  >
</template>

<style scoped lang="scss">
input {
  font-weight: 500;
  padding: 18px 28px;
  max-width: 491px;
  width: 100%;
  border: 4px solid $dark-color;
  border-radius: $br-90;

  &::placeholder {
    color: #8E8E8E;
    font-weight: 500;
  }
}
</style>
