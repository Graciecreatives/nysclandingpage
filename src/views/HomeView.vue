<script setup>
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import interactiveMap from '@/components/interactiveMap.vue';
import aboutUs from '@/components/aboutUs.vue';
import meetDirector from '@/components/meetDirector.vue';
import keyLinks from '@/components/keyLinks.vue';
import ourObjectives from '@/components/ourObjectives.vue';
import ourBlog from '@/components/ourBlog.vue';
import theFooter from '@/components/theFooter.vue';
</script>

<template>
  <main>
    <Header />
    <HeroSection/>
    <interactiveMap/>
    <aboutUs/>
    <meetDirector/>
    <keyLinks/>
    <ourObjectives/>
    <ourBlog/>
    <theFooter/>
  </main>
</template>
