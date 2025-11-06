<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50 overflow-x-hidden">
    <h2
      class="text-3xl md:text-4xl font-bold text-center mb-10"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="0"
    >
      <span class="text-[green]">Key</span> Links
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
    >
      <div
        v-for="(item, index) in links"
        :key="index"
        class="w-full sm:w-64 bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
        data-aos="fade-up"
        data-aos-duration="800"
        :data-aos-delay="200 * index"
      >
        <div
          class="bg-green-100 p-4 rounded-full mb-4 flex items-center justify-center"
        >
          <component :is="item.icon" class="w-8 h-8 text-green-600" />
        </div>
        <router-link
          :to="item.link"
          class="font-semibold text-gray-800 hover:text-green-600"
        >
          {{ item.title }}
        </router-link>
      </div>

      <!-- Empty divs to help center last two cards when using 4 columns -->
      <div v-if="links.length % 4 === 1" class="hidden lg:block col-span-1"></div>
      <div v-if="links.length % 4 === 2" class="hidden lg:block col-span-1"></div>
      <div v-if="links.length % 4 === 3" class="hidden lg:block col-span-1"></div>
    </div>
  </section>
</template>

<script setup>
import {
  BookOpen,
  Users,
  ClipboardList,
  Award,
  Info,
  Eye,
  Image,
  FileText,
  Briefcase,
  File
} from 'lucide-vue-next'

const links = [
  { title: 'Guidelines for Mobilization', icon: BookOpen, link: '/' },
  { title: 'Foreign Trained Graduates', icon: Users, link: '/' },
  { title: 'PCMs Online Registration', icon: ClipboardList, link: '/' },
  { title: 'Information on NYSC Certificates', icon: Award, link: '/' },
  { title: 'Featured Information', icon: Info, link: '/' },
  { title: 'NYSC Mission and Vision', icon: Eye, link: '/' },
  { title: 'DG Gallery', icon: Image, link: '/' },
  { title: 'Publications', icon: FileText, link: '/' },
  { title: 'NYSC x Worknation', icon: Briefcase, link: '/' },
  { title: 'Invitation to Tender', icon: File, link: '/' },
]
</script>
