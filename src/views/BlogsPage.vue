<template>
  <div class="pt-20">
    <section class="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <SectionHeader
        title="Discover Insights and Inspiration"
        subtitle="Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge."
      />
      <RouterLink :to="`/blogs/${featured.slug}`" class="mb-16 grid grid-cols-1 items-center gap-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md lg:grid-cols-2">
        <img :src="featured.image" :alt="featured.title" class="aspect-video w-full rounded-3xl object-cover shadow-md" />
        <div class="flex flex-col gap-4">
          <span class="inline-block w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">{{ featured.category }}</span>
          <h2 class="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">{{ featured.title }}</h2>
          <p class="text-base leading-relaxed text-gray-500">{{ featured.excerpt }}</p>
          <span class="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800">Read more →</span>
        </div>
      </RouterLink>

      <div class="mb-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200"
          :class="active === tab ? 'border-[#6B4EFF] bg-[#6B4EFF] text-white' : 'border-gray-200 text-gray-500 hover:border-purple-300 hover:text-purple-600'"
          @click="active = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="blog in filtered" :key="blog.id" :blog="blog" />
      </div>
    </section>
    <NewsletterCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import AppFooter from '../components/shared/AppFooter.vue';
import BlogCard from '../components/shared/BlogCard.vue';
import NewsletterCTA from '../components/shared/NewsletterCTA.vue';
import SectionHeader from '../components/shared/SectionHeader.vue';
import { blogs } from '../data/blogs';

onMounted(() => {
  document.title = 'FutureSphere | Blogs';
});

const tabs = ['All', 'Healthcare', 'Business', 'Cloud Computing'];
const active = ref('All');
const featured = blogs[0];
const filtered = computed(() => (active.value === 'All' ? blogs : blogs.filter((blog) => blog.category === active.value)));
</script>
