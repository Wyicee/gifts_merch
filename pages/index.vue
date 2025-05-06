<script setup lang="ts">
import Collab from "~/components/layouts/Collab.vue";
import Idea from "~/components/layouts/Idea.vue";

useSeoMeta({
  title: 'Gifts Merch',
  ogTitle: 'Gifts Merch',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
});
</script>

<template>
  <div>
    <Hero/>
    <Popular/>
    <Creative/>
    <Order/>
    <Idea/>
    <Collab/>
  </div>
</template>