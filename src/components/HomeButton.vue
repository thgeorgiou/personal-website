<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true
  },
})

</script>

<template>
  <!-- TODO How to avoid this duplication here. It would have been very simple in react -->
  <router-link v-if="href.charAt(0) === '/'" :to="props.href">
    <span
      class="bg-gray-light text-gray-lighter p-4 m-2 font-mono hover:text-primary transition-colors text-lg"
    >
      <slot />
      <span>{{ "/" }}</span>
    </span>
  </router-link>
  <a v-else :href="props.href">
    <span
      class="bg-gray-light text-gray-lighter p-4 m-2 font-mono hover:text-primary transition-colors text-lg"
    >
      <slot />
      <span>{{ "/" }}</span>
    </span>
  </a>
</template>