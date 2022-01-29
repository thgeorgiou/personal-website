<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="grid grid-cols-6 gap-4 border-b border-b-secondary border-dashed py-8">
    <h2 class="block text-2xl">{{ props.title }}</h2>
    <div class="col-span-5 space-y-8">
      <slot />
    </div>
  </div>
</template>