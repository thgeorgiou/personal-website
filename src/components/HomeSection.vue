<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String
})
</script>

<template>
  <div :id="props.id">
    <h1 class="text-3xl mb-2 font-mono tracking-wide">
      <a class="text-secondary" :href="'#' + props.id">#</a>
      {{ props.title }}
    </h1>
    <div class="space-y-6 text-lg font-light tracking-tight">
      <slot></slot>
    </div>
  </div>
</template>