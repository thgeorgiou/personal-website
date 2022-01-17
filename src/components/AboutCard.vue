<script setup lang="ts">
const props = defineProps({
  title: String,
  location: String,
  period: String
})
</script>

<template>
  <div class="border-b-2 border-secondary w-full pb-4">
    <div class="flex flex-row flex-wrap items-baseline">
      <h1 class="text-xl mr-auto">
        {{ props.title }}
        <span class="font-mono">@</span>
        {{ props.location }}
      </h1>
      <h2 class="text-primary">{{ props.period }}</h2>
    </div>
    <slot />
  </div>
</template>