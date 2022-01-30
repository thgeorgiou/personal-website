<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue';
import MyPhoto from "../assets/me.jpg";
import MyPhoto2 from "../assets/me_2.jpg";
import "../background.css";
</script>

<template>
  <div class="h-auto md:h-full flex flex-col justify-center">
    <!-- Welcome text -->
    <div
      class="flex flex-col lg:flex-row flex-nowrap justify-evenly topography-background p-8 sm:p-20"
    >
      <img class="bg-secondary w-[320px] h-[320px] rounded-lg md:rounded-md" :src="MyPhoto" />
      <div
        class="mx-auto pt-4 text-center md:text-left md:pt-0 md:mx-4 mb-8 md:px-4 flex flex-col justify-center"
      >
        <h3 class="text-3xl text-white dark:text-primary">Hello! My name is</h3>
        <h1 class="pb-4 pt-2 text-6xl text-gray-lighter title-shadow">Thanasis Georgiou</h1>
        <ul
          class="flex flex-col text-left xl:flex-row list-inside list-disc space-y-1 xl:space-x-2 sm:space-y-0 text-2xl font-light text-primary"
        >
          <li>
            <span class="text-white">Data Scientist</span>
          </li>
          <li>
            <span class="text-white">Software Developer</span>
          </li>
          <li>
            <span class="text-white">Electronic Engineer</span>
          </li>
        </ul>
        <div class="mt-6 flex flex-col md:flex-row flex-wrap">
          <HomeButton href="/about">about_me</HomeButton>
          <HomeButton href="https://github.com/thgeorgiou">github</HomeButton>
          <HomeButton href="https://www.linkedin.com/in/thanasis-georgiou-88a97420b/">linkedin</HomeButton>
        </div>
      </div>
    </div>

    <!-- Blog posts -->
    <!-- <div class="my-4 px-4">
      <h1 id="blog-posts" class="text-3xl mb-2">
        <a class="text-secondary" href="#blog-posts">#</a>
        Latest Articles
      </h1>
    </div>-->
  </div>
</template>