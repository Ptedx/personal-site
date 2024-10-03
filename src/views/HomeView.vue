<script setup lang="ts">
  import HeroSection from '@/components/sections/HeroSection.vue'
  import AboutSection from '@/components/sections/AboutSection.vue'
  import Knowledges from '@/components/sections/Knowledges.vue'
  import WorkExperiences from '@/components/sections/WorkExperiences.vue'
</script>

<template>
  <main class="container">
    <HeroSection />
    <AboutSection />
    <Knowledges />
    <WorkExperiences />
  </main>
</template>

<style>
.container {
    min-height: calc(100vh - 80px);
    padding: 0 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

</style>
