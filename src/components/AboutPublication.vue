<script setup lang="ts">
const props = defineProps({
  title: String,
  authors: String,
  year: String,
  type: String
})
</script>

<template>
  <div class="w-full pb-4">
    <div class="flex flex-row flex-wrap items-baseline">
      <h1 class="text-xl mr-auto">{{ props.title }}</h1>
      <h2 class="text-primary">{{ props.type }} - {{ props.year }}</h2>
    </div>
    <h2>{{ props.authors }}</h2>
    <slot name="location" />
    <slot name="description" />
  </div>
</template>