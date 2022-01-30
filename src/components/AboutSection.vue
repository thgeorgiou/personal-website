<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="py-2 last:border-0">
    <h2
      class="block text-2xl mb-4 pb-1 border-b border-b-gray-dark dark:border-b-gray-lighter border-dashed"
    >{{ props.title }}</h2>
    <div class="sm:px-8 space-y-8">
      <slot />
    </div>
  </div>
</template>