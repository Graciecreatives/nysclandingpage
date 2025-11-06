<template>
  <nav class="fixed top-0 left-0 w-full  bg-[green] shadow-lg z-50 overflow-x-hidden">
    <div class="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="../assets/Images/nysclogo.png" alt="NYSC Logo" class="h-10 w-10 object-contain" />
        <h1 class="text-white text-xl font-semibold tracking-wide">NYSC Portal</h1>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex space-x-6 font-medium text-white">
        <li><router-link to="/" class="hover:text-yellow-300 transition">Home</router-link></li>
        <li><router-link to="/" class="hover:text-yellow-300 transition">About Us</router-link></li>
        <li><router-link to="/" class="hover:text-yellow-300 transition">Management</router-link></li>

        <!-- Dropdown -->
        <li class="relative group">
          <button class="flex items-center hover:text-yellow-300 transition">
            Departments
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul class="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-60 text-gray-700">
            <li><router-link to="/" class="block px-4 py-2 hover:bg-green-50">Community Development Service</router-link></li>
            <li><router-link to="/" class="block px-4 py-2 hover:bg-green-50">ICT Department</router-link></li>
            <li><router-link to="/" class="block px-4 py-2 hover:bg-green-50">Finance Department</router-link></li>
          </ul>
        </li>

        <li><router-link to="/" class="hover:text-yellow-300 transition">Locations</router-link></li>
        <li><router-link to="/" class="hover:text-yellow-300 transition">NHIA Enrollment</router-link></li>
        <li><router-link to="/" class="hover:text-yellow-300 transition">Cyber Café Registration</router-link></li>
        <li><router-link to="/" class="hover:text-yellow-300 transition">Contact</router-link></li>
        <li><router-link to="/" class="hover:text-yellow-300 transition">FAQs</router-link></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg border-t border-gray-200">
        <ul class="flex flex-col space-y-4 p-5 text-gray-800 font-medium">
          <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
          <li><router-link to="/" @click="toggleMenu">About Us</router-link></li>
          <li><router-link to="/" @click="toggleMenu">Management</router-link></li>

          <details>
            <summary class="cursor-pointer text-green-700 font-semibold">Departments</summary>
            <ul class="pl-5 mt-2 space-y-2 text-gray-600">
              <li><router-link to="/" @click="toggleMenu">Community Development Service</router-link></li>
              <li><router-link to="/" @click="toggleMenu">ICT Department</router-link></li>
              <li><router-link to="/" @click="toggleMenu">Finance Department</router-link></li>
            </ul>
          </details>

          <li><router-link to="/" @click="toggleMenu">Locations</router-link></li>
          <li><router-link to="/" @click="toggleMenu">NHIA Enrollment</router-link></li>
          <li><router-link to="/" @click="toggleMenu">Cyber Café Registration</router-link></li>
          <li><router-link to="/" @click="toggleMenu">Contact</router-link></li>
          <li><router-link to="/" @click="toggleMenu">FAQs</router-link></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
</script>

<style scoped>
/* Smooth mobile menu animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
