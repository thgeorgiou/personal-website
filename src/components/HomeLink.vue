<script setup lang="ts">
const props = defineProps({
  href: String
})

</script>

<template>
  <a
    :href="props.href"
    class="transition-all underline decoration-primary decoration-1 hover:decoration-2"
  >
    <slot></slot>
  </a>
</template>