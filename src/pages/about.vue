<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
import HomeSection from '../components/HomeSection.vue';
import HomeLink from '../components/HomeLink.vue';
import AboutSection from '../components/AboutSection.vue';
import AboutCard from '../components/AboutCard.vue';
import MyPhoto from "../assets/me.jpg";
import AboutList from '../components/AboutList.vue';
import AboutListItem from '../components/AboutListItem.vue';
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="h-40 flex flex-row justify-center mb-8">
      <img :src="MyPhoto" class="rounded-full h-40 p-2 bg-white" />
      <div class="pl-8 flex flex-col justify-center">
        <h1 class="text-3xl">Thanasis Georgiou</h1>
        <h1 class="text-2xl">About Me - CV</h1>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mb-8">
      <HomeSection id="me" title="Me">
        <p>I am a self-diagnosed data hoarder, always on the lookout for data-driven challenges to solve. I started my career in web development during 2016 and since then I have tried to merge web and data science by creating insightful windows into the world of data.</p>

        <p>I have a background in Electronic Engineering, a degree I choose out of fascination for anything digital and computers. I believe this insight into the inner workings of hardware lets me better understand how things work at lower levels and write better code. Occasionally in my free time, I dabble in hardware projects.</p>

        <p>These days I focus on data-heavy projects. I enjoy the challenge of handling large amounts of data and harvesting information to provide real-time services.</p>
      </HomeSection>

      <!-- Now section -->
      <HomeSection id="now" title="Now">
        <AboutList>
          <AboutListItem>
            Working full-time for the
            <HomeLink href="https://www.noa.gr">National Observatory of Athens</HomeLink>, as a member of the
            <HomeLink href="https://react.space.noa.gr/">ReACT Team</HomeLink>. ReACT works on atmospheric remote sensing applications, combining satellite and ground-based data in bleading-edge research.
          </AboutListItem>
          <AboutListItem>
            I am a part-time student, attending the
            <HomeLink href="https://datascience.aueb.gr">MSc in Data Science</HomeLink>
            {{ " " }}program of the
            <HomeLink href="https://aueb.gr/en/">University of Business and Economics.</HomeLink>
          </AboutListItem>
          <AboutListItem>I do freelance projects (webdev or dealing with data).</AboutListItem>
        </AboutList>
      </HomeSection>
    </div>

    <SectionHeader title="CV" />
    <AboutSection title="Experience">
      <AboutCard
        title="Software Engineer"
        location="National Observatory of Athens"
        period="March 2018 - Present"
      />
      <AboutCard
        title="Research Lab Member"
        location="Technological Educational Institute of Athens"
        period="March 2014 - February 2018"
      />
    </AboutSection>
    <AboutSection title="Education">
      <AboutCard
        title="MSc in Data Science"
        location="Athens University of Economics and Business"
        period="September 2020 - Present"
      />
      <AboutCard
        title="Bsc in Electrical & Electronic Engineering"
        location="University of West Attica"
        period="September 2014 - September 2020"
      >
        <AboutList class="text-lg mt-2">
          <AboutListItem>Specialization: Communication and Network Systems</AboutListItem>
          <AboutListItem>Thesis: Platform for remote control of scientific equipment and collection of measurement data</AboutListItem>
          <AboutListItem>Grade: 8.23/10</AboutListItem>
        </AboutList>
      </AboutCard>
    </AboutSection>
  </div>
</template>
