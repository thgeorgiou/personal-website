<script setup lang="ts">
const props = defineProps({
  href: String
})

</script>

<template>
  <router-link :to="props.href" class="bg-white text-primary p-4 m-2 box-shadow">
    <slot />
  </router-link>
</template>