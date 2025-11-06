<template>
  <section class="pt-24 px-6 md:px-16 text-center bg-gray-50 overflow-x-hidden md:overflow-x-visible">
    <!-- Heading -->
    <h1 
    data-aos="fade-up"
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black max-w-4xl mx-auto mb-6"
    >
      <span class="text-[green]">Empowering</span> Nigerian Youths Through 
      <span class="text-[green]">National Service</span>
    </h1>

    <!-- Paragraph -->
    <p 
    data-aos="fade-up"
      data-aos-delay="200"
      class="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2"
    >
      The National Youth Service Corps (NYSC) is committed to fostering unity, development, 
      and leadership among Nigerian graduates through structured community service and skill 
      development programs.
    </p>

    <!-- Buttons -->
    <div 
    data-aos="zoom-in" 
      data-aos-delay="400"
    class="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10">
      <router-link
        to=""
        class="bg-[green] text-white px-8 py-3 rounded-xl hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-300 w-full sm:w-auto"
      >
        Learn More
      </router-link>

      <router-link
        to=""
        class="bg-white text-[green] px-8 py-3 rounded-xl border-2 border-[green] hover:bg-green-600 hover:text-white transition duration-300 w-full sm:w-auto"
      >
        Register Now
      </router-link>
    </div>

   <!-- Marquee Section -->
    <div class="mt-16 relative w-full overflow-hidden" data-aos="fade-up"
      data-aos-delay="400">
      <div class="flex items-center gap-10 animate-marquee">
        <img src="../assets/Images/carousel_1.jpg" alt="carousel 1" class="h-48 w-auto rounded-xl object-cover" />
        <img src="../assets/Images/carousel_2.jpg" alt="carousel 2" class="h-48 w-auto rounded-xl object-cover" />
        <img src="../assets/Images/about-nysc-3.jpg" alt="carousel 3" class="h-48 w-auto rounded-xl object-cover" />
        <img src="../assets/Images/carousel_1.jpg" alt="carousel 1 duplicate" class="h-48 w-auto rounded-xl object-cover" />
        <img src="../assets/Images/carousel_2.jpg" alt="carousel 2 duplicate" class="h-48 w-auto rounded-xl object-cover" />
        <img src="../assets/Images/about-nysc-3.jpg" alt="carousel 3 duplicate" class="h-48 w-auto rounded-xl object-cover" />
      </div>
    </div>

    <div class="bg-[green] text-white">

    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}
</style>
