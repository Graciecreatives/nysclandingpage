<template>
  <section class="px-6 md:px-16 pt-24 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white py-10">
    <!-- Text Section -->
    <div class="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right" data-aos-duration="1200">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          About the <span class="text-[green]">NYSC</span>
        </h2>

      <p class="text-gray-700 leading-relaxed mb-6">
        The NYSC scheme was created in a bid to reconstruct, reconcile, and rebuild the country after the Nigerian Civil War.
        The unfortunate antecedents in our national history gave impetus to the establishment of the National Youth Service Corps 
        by decree No. 24 of 22nd May 1973, which stated that the NYSC is being established 
        “with a view to the proper encouragement and development of common ties among the youths of Nigeria 
        and the promotion of national unity.”
      </p>

      <router-link
        to=""
        class="inline-block px-6 py-3 bg-[green] text-white rounded-lg font-medium hover:bg-white hover:text-[green] hover:border-2 hover:border-[green] transition duration-300"
      >
        Read More
      </router-link>
    </div>

    <!-- Image Section -->
    <div class="w-full md:w-1/2" data-aos="zoom-in" 
      data-aos-duration="1300">
      <img
        src="../assets/Images/about-nysc-3.jpg"
        alt="About NYSC"
        class="rounded-xl w-full h-auto object-cover shadow-md"
      />
    </div>
  </section>
</template>
