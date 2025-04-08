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
  border-radius: $bor-radius-90;
  background-color: $green-color;

  @include laptop {
    font-size: 14px;
    padding: 10px 37px;
    font-weight: 600;
  }

  &:hover {
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.1);
  }

  &:active {}
}
</style>
