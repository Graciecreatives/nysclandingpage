<template>
  <footer class="bg-[green] text-white pt-12 pb-6 px-6 md:px-16 overflow-x-hidden">
    <!-- Footer Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Quick Links</h3>
        <ul class="space-y-2">
          <li v-for="(item, i) in quickLinks" :key="i">
            <router-link to="" class="hover:underline">{{ item }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Socials -->
      <div>
        <h3 class="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Socials</h3>
        <ul class="space-y-2">
          <li v-for="(social, i) in socials" :key="i">
            <router-link to="" class="hover:underline">{{ social }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Partners -->
      <div>
        <h3 class="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Partners</h3>
        <ul class="space-y-2">
          <li v-for="(partner, i) in partners" :key="i">
            <router-link to="" class="hover:underline">{{ partner }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Contact</h3>
        <h4 class="font-bold">HEAD OFFICE</h4>
        <p class="mt-2 text-sm">
          416, Tigris Crescent Off Aguiyi Ironsi Street, Maitama.<br />
          PMB 138, Garki, Abuja.
        </p>
        <p class="mt-3 text-sm">
          <strong>Email:</strong> info@nysc.gov.ng
        </p>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-white/30 pt-6 text-center text-sm space-y-3">
      <p class="flex justify-center items-center gap-3 flex-wrap">
        Powered by:
        <img src="../assets/Images/nysclogo.png" alt="NYSC Logo" class="h-8" />
        <img src="../assets/Images/coat-of-arms.png" alt="Coat of Arms" class="h-8" />
      </p>
      <p>Copyright © 2025, All Rights Reserved NYSC Directorate Headquarters</p>
      <p class="italic">Developed by Graciecreatives</p>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  'NHIA Enrolment',
  'Review Of Price Charges On Verification Of NYSC',
  'Instruments',
  'NYSC Mobilization TimeTable',
  'Prospective Corp Members Online Registration',
  'Download NYSC Mobile App',
  'NYSC Service Year:- An Overview',
  'NYSC Orientation Camp Address',
  'NYSC State Offices Support Line',
  'Guidelines For Mobilisation',
  "DG's Gallery",
  'Privacy Policy',
  'FAQs'
]

const socials = ['Facebook', 'X', 'Instagram', 'Youtube', 'Whatsapp']

const partners = [
  'Joint Admissions And Matriculations Board (JAMB)',
  'West African Examinations Council (WAEC)',
  'National Health Insurance Agency (NHIA)',
  'National Identity Management Commission (NIMC)'
]
</script>
