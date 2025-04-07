<template>
  <button type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  color: #EEF1F6;
  font-size: 17px;
  font-weight: 500;
  padding: 17px 62px;
  border: none;
  border-radius: $br-90;
  background-color: $green-color;

  &:hover {
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.1);
  }

  &:active {}
}
</style>
