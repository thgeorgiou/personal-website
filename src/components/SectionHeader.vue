<script setup lang="ts">
const props = defineProps({
  href: String,
  title: String
})
</script>

<template>
  <h1 class="text-3xl mb-2 font-mono tracking-wide">
    <a class="text-secondary" :href="props.href">#</a>
    {{ props.title }}
  </h1>
</template>