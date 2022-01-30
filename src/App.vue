<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div
    class="bg-gray-lighter text-gray-dark dark:bg-gray-darker dark:text-gray-lighter h-screen flex flex-col flex-nowrap overflow-x-auto"
  >
    <TheHeader></TheHeader>
    <router-view class="flex-1"></router-view>
    <TheFooter></TheFooter>
  </div>
</template>