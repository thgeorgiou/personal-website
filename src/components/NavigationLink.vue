<script setup lang="ts">
const props = defineProps({
  to: String
})
</script>

<template>
  <router-link class="font mx-2 hover:border-b-2" :to="props.to">
    <slot />
  </router-link>
</template>