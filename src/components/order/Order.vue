<template>
  <div class="order">
    <div class="order__body container">
      <img
        class="order__body-image"
        src="@/assets/images/order/image.jpg"
        alt="mockup design sweater"
        width="753"
        height="532"
      />
      <div class="order__body-wrapper">
        <h3 class="order__body-title">
          Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры,
          вкусности и другое под заказ.
        </h3>
        <p class="order__body-description">
          Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же
          у Вас всегда есть возможность кастомизировать изделия.
        </p>
        <div class="order__body-circles">
          <div class="order__body-circles-item" v-for="n in 4" :key="n">
            <img src="@/assets/images/order/1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order {
  padding-top: 100px;

  &__body {
    display: flex;
    align-items: center;
    column-gap: 40px;
    padding-top: 100px;

    @include laptop {
      flex-direction: column;
    }

    @include tablet {
      align-items: start;
    }

    &-image {
      height: 532px;
      border-radius: $bor-radius-15;
      box-shadow:
        0 8px 8px -4px rgba(26, 32, 44, 0.04),
        0 16px 20px -4px rgba(26, 32, 44, 0.1);
      object-fit: none;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &-title {
      line-height: 130%;
      max-width: 826px;

      @include tablet {
        padding-top: 34px;
        font-size: 24px;
      }

      @include mobile-s {
        font-size: 20px;
      }
    }

    &-description {
      color: $dark-grey-color;
      line-height: 130%;
      letter-spacing: 0.07em;
      padding-top: 30px;
      max-width: 510px;

      @include mobile-s {
        font-size: 15px;
        padding-top: 20px;
      }
    }

    &-circles {
      display: flex;
      justify-content: space-between;
      column-gap: 24px;
      padding-top: 40px;

      @include mobile {
        padding-top: 40px;
      }

      &-item {
        display: flex;
        align-items: center;
        max-width: 133px;
        width: 100%;
        aspect-ratio: 1 / 1;
        background: linear-gradient(45deg, #9796f0 0%, #ffe0e8 100%) no-repeat center / cover;
        border-radius: 100%;
        box-shadow:
          0 8px 8px -4px rgba(26, 32, 44, 0.04),
          0 16px 20px -4px rgba(26, 32, 44, 0.1);
      }
    }
  }
}
</style>
