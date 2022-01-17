<script setup lang="ts">
import NavigationLink from "./NavigationLink.vue"
</script>

<template>
  <header class="flex flex-row flex-nowrap p-4 text-lg">
    <router-link class="font-mono" to="/">
       {{ "</> thgeorgiou" }}
    </router-link>

    <nav class="ml-auto">
      <NavigationLink to="/about">About</NavigationLink>
      <!-- <NavigationLink to="/posts">Posts</NavigationLink> -->
    </nav>
  </header>
</template>