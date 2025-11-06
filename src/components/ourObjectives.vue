<template>
  <section class="py-16 px-6 md:px-16 bg-gray-50 overflow-x-hidden">
    <h2
      class="text-3xl md:text-4xl font-bold text-center mb-10"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="0"
    >
      Our <span class="text-[green]">Objectives</span>
    </h2>

    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      <!-- Text Section -->
      <div
        class="lg:w-1/2 w-full"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <h3
          class="text-lg md:text-xl text-gray-800 font-semibold mb-5 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          The objectives of the National Youth Service Corps Scheme are clearly
          spelt out in Decree No.51 of 16th June 1993 as follows:
        </h3>

        <ol
          class="list-decimal list-inside text-gray-700 space-y-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <li>
            To inculcate discipline in Nigerian youths by instilling in them a
            tradition of industry at work, and of patriotic and loyal service to
            Nigeria in any situation they may find themselves.
          </li>
          <li>
            To raise the moral tone of the Nigerian youths by giving them the
            opportunity to learn about higher ideals of national achievement,
            social and cultural improvement.
          </li>
          <li>
            To develop in the Nigerian youths the attitudes of mind, acquired
            through shared experience and suitable training, which will make
            them more amenable to mobilisation in the national interest.
          </li>
        </ol>

        <router-link
          to=""
          class="inline-block mt-6 bg-[green] text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          Read More
        </router-link>
      </div>

      <!-- Image Section -->
      <div
        class="lg:w-1/2 w-full flex justify-center"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <img
          src="../assets/Images/carousel_2.jpg"
          alt="NYSC Objectives"
          class="rounded-2xl shadow-md w-full max-w-lg object-cover"
        />
      </div>
    </div>
  </section>
</template>
