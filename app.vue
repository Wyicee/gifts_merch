<script setup lang="ts">
const { $ScrollSmoother } = useNuxtApp();

onMounted(() => {
  $ScrollSmoother.create(
      {
        smooth: 1,
        effects: true,
      }
  );
});

</script>

<template>
  <main>
    <NuxtPage/>
  </main>
  <!--  <Footer/>-->
</template>