<script setup lang="ts">
const props = defineProps({
  title: String,
  location: {
    type: String,
    required: false,
    default: ""
  },
  period: {
    type: String,
    required: false,
    default: ""
  }
})
</script>

<template>
  <div class="w-full pb-4">
    <div class="flex flex-row flex-wrap items-baseline">
      <h1 class="text-xl mr-auto">
        {{ props.title }}
        <span v-if="props.location !== ''" class="font-mono">@</span>
        {{ props.location }}
      </h1>
      <h2 class="text-primary">{{ props.period }}</h2>
    </div>
    <slot />
  </div>
</template>