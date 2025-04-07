<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
