<template>
  <section
    class="px-6 md:px-16 pt-10 md:pt-24 pb-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white overflow-x-hidden md:overflow-x-visible"
  >
    <!-- Image Section -->
    <div class="w-full md:w-1/2" data-aos="fade-right" data-aos-duration="800" data-aos-delay="0">
      <img
        src="../assets/dg-official.jpg"
        alt="Director-General"
        class="rounded-xl w-full h-auto object-cover shadow-md"
      />
    </div>

    <!-- Text Section -->
    <div class="w-full md:w-1/2 md:text-center text-left md:text-left">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        Meet the <span class="text-[green]">Director-General</span>
      </h2>

      <p
        class="text-gray-700 leading-relaxed mb-5 text-justify"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <span class="text-[green] font-semibold">Brigadier General Olakunle Oluseye Nafiu</span> 
        is an alumnus of the prestigious U.S. Army War College, Carlisle, Pennsylvania State, 
        where he earned a Master of Strategic Studies as a member of the Class of 2022 Resident Course. 
        He also holds a Master of International Affairs and Diplomacy from Ahmadu Bello University, Zaria, 
        and a Bachelor’s degree in Geography from the Nigerian Defence Academy, Kaduna. 
        He is skilled in policy and strategy formulation and has excellent interpersonal relations.
      </p>

      <h3
        class="text-xl font-semibold text-[green] mb-2"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
      >
        The Director-General's Policy Thrust
      </h3>

      <p
        class="text-gray-700 mb-4 text-justify"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        Strengthening the NYSC Scheme to better meet the evolving needs of Nigerian society 
        and ensure its future relevance.
      </p>

      <h3
        class="text-xl font-semibold text-[green] mb-2"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="1000"
      >
        The Focal Points
      </h3>

      <ol
        class="list-decimal list-inside text-gray-700 space-y-1 mb-6"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="1200"
      >
        <li>Enhanced Security and Welfare of Corps Members and Staff</li>
        <li>Fostering Patriotism and Boosting Corps Members’ personal growth</li>
        <li>Building a Resilient Workforce</li>
        <li>Promoting Strategic Communication</li>
      </ol>

      <router-link
        to="/"
        class="inline-block bg-[green] text-white px-6 py-3 rounded-xl hover:bg-white hover:text-[green] hover:border hover:border-[green] transition duration-300"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="1400"
      >
        Read More
      </router-link>
    </div>
  </section>
</template>
