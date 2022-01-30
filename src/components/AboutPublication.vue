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
    <div class="flex flex-row flex-nowrap">
      <h1 class="text-xl max-w-[80%] mr-auto">{{ props.title }}</h1>
      <h2 class="text-primary">{{ props.type }} - {{ props.year }}</h2>
    </div>
    <div class="italic text-sm pb-4">{{ props.authors }}</div>
    <div class="pb-2">
      <slot name="location" />
    </div>
    <div class="font-light tracking-tight">
      <slot name="description" />
    </div>
  </div>
</template>