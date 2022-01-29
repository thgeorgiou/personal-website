<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
import HomeSection from '../components/HomeSection.vue';
import HomeLink from '../components/HomeLink.vue';
import AboutSection from '../components/AboutSection.vue';
import AboutCard from '../components/AboutCard.vue';
import MyPhoto from "../assets/me.jpg";
import AboutList from '../components/AboutList.vue';
import AboutListItem from '../components/AboutListItem.vue';
import AboutPublication from '../components/AboutPublication.vue';
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

        <p>I have a background in Electronic Engineering, a degree I choose out of fascination for anything digital and computers. I believe this insight into the inner workings of hardware lets me better understand how things work at lower levels and write better code. Occasionally in my free time, I dabble in hardware projects and 3D printing. I keep an acquarium, love gardening and hiking.</p>

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
      >
        <AboutList class="text-lg mt-2">
          <AboutListItem>Currently working on a global aerosol dataset produced from satellite measurements.</AboutListItem>
          <AboutListItem>Development on data management platform for the climate change observatory of Antikythera (PANGEA).</AboutListItem>
          <AboutListItem>
            Developed platform & website for the collection and management of measurement data at the
            <HomeLink href="https://askos.space.noa.gr">ESA-ASKOS</HomeLink>
            {{ " " }}scientific campaign.
          </AboutListItem>
          <AboutListItem>Data management and job orchestration on HPC systems for PRACE projects.</AboutListItem>
        </AboutList>
      </AboutCard>
      <AboutCard
        title="Research Lab Member"
        location="Technological Educational Institute of Athens"
        period="March 2014 - February 2018"
      >
        <AboutList class="text-lg mt-2">
          <AboutListItem>
            Participated in the
            <HomeLink href="https://www.hackair.eu/">hackAIR.eu</HomeLink>
            {{ " " }}project as an Embedded Engineer, designing and programming hardware for citizen observation of air quality.
          </AboutListItem>
          <AboutListItem>Developed a CMS for keeping students up-to-date through Bluetooth LE beacons and push notifications.</AboutListItem>
          <AboutListItem>Developed web platform for management of medical appointments in a public hospital ward.</AboutListItem>
          <AboutListItem>
            Participated in the
            <HomeLink href="https://pre-tect.space.noa.gr">PRE-TECT</HomeLink>
            {{ " " }}scientific campaign as an Embedded Engineer, working on wireless telemetry for radiosondes.
          </AboutListItem>
        </AboutList>
      </AboutCard>
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

    <AboutSection title="Skills">
      <AboutCard title="Programming">
        <AboutList class="text-lg mt-2">
          <AboutListItem>Javascript, Typescript, Node.JS</AboutListItem>
          <AboutListItem>Vue, React</AboutListItem>
          <AboutListItem>Python</AboutListItem>
          <AboutListItem>C# (.net core)</AboutListItem>
        </AboutList>
      </AboutCard>
      <AboutCard title="DevOps, System Administration">
        <AboutList class="text-lg mt-2">
          <AboutListItem>Linux</AboutListItem>
          <AboutListItem>Docker, Podman, Nomad, SaltStack</AboutListItem>
          <AboutListItem>Airflow, Dagster</AboutListItem>
          <AboutListItem>Gitlab CI</AboutListItem>
        </AboutList>
      </AboutCard>
    </AboutSection>

    <AboutSection title="Academic Publications">
      <AboutPublication
        title="First demonstration of a CALIPSO-based fine-mode and coarse-mode pure-dust product"
        year="2021"
        authors="Proestakis Εmmanouil, Gkikas Αntonis, Alexiou Alexandros, Marinou Eleni, Georgiou Thanasis, Amiridis Vassilis"
        type="Conference"
      >
        <template v-slot:location>
          <HomeLink href="https://www.conferre.gr/allevents/comecap2020">COMECAP 2021</HomeLink>
        </template>

        <template
          v-slot:description
        >My contribution: Development of Python codebase for processing of satellite datasets. Optimization of existing codebase for better utilization of Numpy functions, improving performance x100 and making the project feasible.</template>
      </AboutPublication>

      <AboutPublication
        title="Satellite EO of Saharan dust mass transport towards the estimation of dust deposition fluxes along the open Atlantic Ocean"
        year="2021"
        authors="Emmanouil Proestakis, Antonis Gkikas, Angela Benedetti, Alexandros Alexiou, Thanasis Georgiou, Eleni Marinou, Vassilis Amiridis"
        type="Conference"
      >
        <template v-slot:location>
          <HomeLink href="https://www.conferre.gr/allevents/comecap2020/">COMECAP 2021</HomeLink>
        </template>

        <template
          v-slot:description
        >My contribution: Development of Python codebase for processing of satellite datasets.</template>
      </AboutPublication>

      <AboutPublication
        title="Monitoring dust particle orientation with a novel polarization lidar at Athens"
        year="2021"
        authors="Tsekeri A, Amiridis V, Louridas A, Georgoussis G, Freudenthaler V., Metallinos S, Doxastakis G, Gasteiger J., Siomos N., Paschou P., Georgiou T., Tsaknakis G., Evangelatos C., Binietoglou I."
        type="Conference"
      >
        <template v-slot:location>
          <HomeLink href="https://www.conferre.gr/allevents/comecap2020/">COMECAP 2021</HomeLink>
        </template>

        <template
          v-slot:description
        >My contribution: Assistance in development and orchestration of processing jobs for neural network training on HPC.</template>
      </AboutPublication>

      <AboutPublication
        title="First demonstration of a CALIPSO-based fine-mode and coarse-mode pure-dust product"
        year="2021"
        authors="Proestakis Εmmanouil, Gkikas Αntonis, Alexiou Alexandros, Marinou Eleni, Georgiou Thanasis, Amiridis Vassilis"
        type="Conference"
      >
        <template v-slot:location>
          <HomeLink href="https://www.conferre.gr/allevents/comecap2020/">COMECAP 2021</HomeLink>
        </template>

        <template
          v-slot:description
        >My contribution: Development of Python codebase for processing of satellite datasets. Optimization of existing codebase for better utilization of Numpy functions, improving performance x100 and making the project feasible.</template>
      </AboutPublication>

      <AboutPublication
        title="Polarization lidar for detecting dust orientation: system design and calibration"
        year="2021"
        authors="Alexandra Tsekeri, Vassilis Amiridis, Alexandros Louridas, George Georgoussis, Volker Freudenthaler, Spiros Metallinos, George Doxastakis, Josef Gasteiger, Nikolaos Siomos, Peristera Paschou, Thanasis Georgiou, George Tsaknakis, Christos Evangelatos, Ioannis Binietoglou"
        type="Journal"
      >
        <template v-slot:location>
          <HomeLink
            href="https://doi.org/10.5194/amt-14-7453-2021"
          >Atmospheric Measurement Techniques</HomeLink>
        </template>
        <template
          v-slot:description
        >My contribution: Assistance in neural network development and orchestration of data processing on HPC systems.</template>
      </AboutPublication>

      <AboutPublication
        title="Polarization lidar for detecting dust orientation: first measurements"
        year="2021"
        authors="Alexandra Tsekeri, Volker Freudenthaler, Vassilis Amiridis, George Doxastakis, Alexandros Louridas, George Georgoussis, Spiros Metallinos, Josef Gasteiger, Nikolaos Siomos, Peristera Paschou, Thanasis Georgiou, George Tsaknakis, Christos Evangelatos, Ioannis Binietoglou"
        type="Conference"
      >
        <template v-slot:location>vEGU21</template>
        <template
          v-slot:description
        >My contribution: Assistance in neural network development and orchestration of data processing on HPC systems.</template>
      </AboutPublication>

      <AboutPublication
        title="Monitoring dust orientation"
        year="2018"
        authors="Alexandra Tsekeri, Vassilis Amiridis, Josef Gasteiger, Thanasis Georgiou, Volker Freudenthaler"
        type="Conference"
      >
        <template v-slot:location>
          <HomeLink href="https://www.events.prace-ri.eu/event/850/">EuroHPC Summit Week 2019</HomeLink>
        </template>
        <template
          v-slot:description
        >My contribution: Data management and orchestration of jobs for executing hunders of thousands of scattering simulations on HPC systems.</template>
      </AboutPublication>
    </AboutSection>
  </div>
</template>
