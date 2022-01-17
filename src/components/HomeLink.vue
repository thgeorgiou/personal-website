<script setup lang="ts">
const props = defineProps({
  href: String
})

</script>

<template>
  <a
    :href="props.href"
    class="transition-all underline decoration-primary decoration-2 hover:decoration-4"
  >
    <slot></slot>
  </a>
</template>