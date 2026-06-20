<template>
  <div class="space-y-20">
    <section class="container-page section-pad">
      <SectionHeader
        title="Discover Insights and Inspiration"
        subtitle="Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge."
      />
      <RouterLink :to="`/blogs/${featured.slug}`" class="card mt-16 grid gap-8 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <img :src="featured.image" :alt="featured.title" class="h-80 w-full rounded-2xl object-cover" />
        <div class="flex flex-col justify-center">
          <span class="pill w-fit">{{ featured.category }}</span>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-4xl">{{ featured.title }}</h2>
          <p class="mt-5 leading-7 text-slate-500">{{ featured.excerpt }}</p>
          <span class="mt-7 text-sm font-semibold text-slate-500 underline">Read more</span>
        </div>
      </RouterLink>

      <div class="mt-14 flex flex-wrap justify-center gap-3">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="active === tab ? 'bg-brand-accent text-white' : 'bg-white text-slate-500'"
          @click="active = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
