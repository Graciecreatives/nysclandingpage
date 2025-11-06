<template>
  <section class="py-16 px-6 md:px-16 bg-gray-50 overflow-x-hidden">
    <h2
      class="text-3xl md:text-4xl font-bold text-center mb-10"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="0"
    >
      Latest <span class="text-[green]">News</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(blog, index) in blogs"
        :key="blog.id"
        class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
        data-aos="fade-up"
        data-aos-duration="800"
        :data-aos-delay="200 * index"
      >
        <img
          :src="blog.image"
          :alt="blog.title"
          class="w-full h-56 object-cover"
        />

        <div class="p-6 flex flex-col justify-between flex-grow">
          <h3
            class="text-lg font-semibold text-gray-800 mb-4 line-clamp-3"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="200 * index + 100"
          >
            {{ blog.title }}
          </h3>

          <router-link
            :to="blog.link"
            class="inline-block bg-[green] text-white font-medium px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all self-start"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="200 * index + 200"
          >
            Read More →
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import image1 from '@/assets/Images/news1.jpg'
import image2 from '@/assets/Images/news2.jpg'
import image3 from '@/assets/Images/news3.jpg'

const blogs = [
  {
    id: 1,
    title:
      'NYSC TRAINS LOCAL GOVERNMENT INSPECTORS ON EFFECTIVE USE OF DIGITAL TOOLS',
    image: image1,
    link: '/'
  },
  {
    id: 2,
    title: 'NYSC DG VISITS NYSC FCT SECRETARIAT',
    image: image2,
    link: '/'
  },
  {
    id: 3,
    title:
      'EXECUTIVE DIRECTOR, NATIONAL PRIMARY HEALTHCARE DEVELOPMENT AGENCY, DR MUYI AINA VISITS NYSC DIRECTOR GENERAL, BRIGADIER GENERAL OLAKUNLE NAFIU',
    image: image3,
    link: '/'
  }
]
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
