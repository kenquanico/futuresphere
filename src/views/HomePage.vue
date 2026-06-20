<template>
  <div class="pt-20">
    <section class="flex min-h-screen flex-col items-center justify-center bg-white px-6 pb-16 pt-24 text-center">
      <h1 class="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Revolutionizing the Future with Cutting-Edge Technology
      </h1>
      <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-500">Empowering Innovation for a Digital Tomorrow</p>
      <div class="mb-16 flex flex-wrap items-center justify-center gap-4">
        <RouterLink to="/careers" class="inline-flex items-center gap-2 rounded-full border border-[#6B4EFF] px-6 py-3 text-sm font-semibold text-[#6B4EFF] transition-all duration-200 hover:bg-[#6B4EFF] hover:text-white">Signup</RouterLink>
        <RouterLink to="/contact" class="inline-flex items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">Contact Us</RouterLink>
      </div>
      <img class="mx-auto aspect-[1058/388] w-full max-w-5xl overflow-hidden rounded-full object-cover shadow-2xl" :src="images.heroTech" alt="FutureSphere technology visualization" />
      <div class="mx-auto mt-20 grid max-w-lg grid-cols-3 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold text-gray-900">{{ stat.value }}</div>
          <div class="mt-1 text-sm text-gray-500">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="fade-in mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
      <SectionHeader
        tag="Features"
        title="Discover the Tools that Drive Success"
        subtitle="Unleash innovation and accelerate growth with our dynamic product."
      />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeatureCard v-for="feature in features.slice(0, 3)" :key="feature.title" :feature="feature" />
      </div>
      <div class="mt-12 flex justify-center gap-4">
        <RouterLink to="/contact" class="inline-flex items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">Contact Us</RouterLink>
        <RouterLink to="/features" class="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800">View All →</RouterLink>
      </div>
    </section>

    <section class="fade-in bg-[#F8F7FF] py-16 lg:py-24">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
      <div class="order-2 flex flex-col gap-6 lg:order-1">
        <span class="text-sm font-semibold uppercase tracking-widest text-purple-600">Our Mission Statement</span>
        <h2 class="text-3xl font-bold text-gray-900">
          Empowering the world through transformative technology solutions
        </h2>
        <p class="text-lg leading-relaxed text-gray-500">
          We are dedicated to empowering individuals, businesses, and communities by providing innovative and cutting-edge technology solutions that unlock new possibilities and drive positive change.
        </p>
        <div class="flex gap-3">
          <RouterLink to="/careers" class="inline-flex items-center gap-2 rounded-full border border-[#6B4EFF] px-6 py-3 text-sm font-semibold text-[#6B4EFF] transition-all duration-200 hover:bg-[#6B4EFF] hover:text-white">Signup</RouterLink>
          <RouterLink to="/contact" class="inline-flex items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">Contact Us</RouterLink>
        </div>
      </div>
      <img class="order-1 aspect-[4/3] w-full rounded-3xl object-cover shadow-lg lg:order-2" :src="images.team" alt="FutureSphere team" />
      </div>
    </section>

    <ClientsStrip />

    <section class="fade-in bg-white py-16 lg:py-24">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
      <div class="flex flex-col gap-6">
        <span class="text-sm font-semibold uppercase tracking-widest text-purple-600">Services</span>
        <h2 class="text-3xl font-bold text-gray-900">Streamlined Business Operations</h2>
        <p class="text-lg leading-relaxed text-gray-500">
          Our technology solutions streamline and optimize business operations, automating processes, improving efficiency, and increasing overall productivity.
        </p>
      </div>
      <img class="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" :src="images.office" alt="Office team" />
      </div>
    </section>

    <section class="fade-in bg-[#F8F7FF] px-6 py-16 lg:py-24">
      <SectionHeader tag="Testimonials" title="1M+ Global Customers" />
      <div class="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
        <div class="flex items-start gap-6">
        <img class="h-12 w-12 rounded-full object-cover grayscale" :src="images.customer" alt="Sarah Thompson" />
        <div class="text-left">
          <p class="mb-8 text-xl italic leading-relaxed text-gray-700">
            I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our operations.
          </p>
          <div class="flex items-center justify-between gap-4">
            <div>
              <h3 class="text-base font-semibold text-gray-900">Sarah Thompson</h3>
              <p class="text-sm text-gray-500">CEO, Thompson Enterprises</p>
            </div>
            <div class="flex gap-3 text-purple-600">
              <button class="grid h-10 w-10 place-items-center rounded-full border border-gray-200 transition-all duration-200 hover:border-purple-500">←</button>
              <button class="grid h-10 w-10 place-items-center rounded-full bg-[#6B4EFF] text-white transition-all duration-200 hover:bg-[#5538EE]">→</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-xl font-bold text-gray-400">
        <span v-for="logo in partnerLogos" :key="logo.name" class="inline-flex items-center gap-2">
          <img class="h-6 w-6 rounded-md object-contain" :src="logo.icon" :alt="`${logo.name} icon`" />
          {{ logo.name }}
        </span>
      </div>
    </section>

    <section class="fade-in mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
      <SectionHeader tag="Blog" title="From our Latest Blogs" />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <BlogCard v-for="blog in blogs.slice(1, 4)" :key="blog.id" :blog="blog" />
      </div>
      <div class="mt-12 flex justify-center gap-4">
        <RouterLink to="/contact" class="inline-flex items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">Contact Us</RouterLink>
        <RouterLink to="/blogs" class="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800">View All →</RouterLink>
      </div>
    </section>

    <NewsletterCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import AppFooter from '../components/shared/AppFooter.vue';
import BlogCard from '../components/shared/BlogCard.vue';
import ClientsStrip from '../components/shared/ClientsStrip.vue';
import NewsletterCTA from '../components/shared/NewsletterCTA.vue';
import SectionHeader from '../components/shared/SectionHeader.vue';
import FeatureCard from '../components/ui/FeatureCard.vue';
import { useReveal } from '../composables/useReveal';
import { images, partnerLogos } from '../data/assets';
import { blogs } from '../data/blogs';
import { features } from '../data/features';

useReveal();
onMounted(() => {
  document.title = 'FutureSphere | Home';
});

const stats = [
  { value: '50K', label: 'New users per month' },
  { value: '150K', label: 'Active Users' },
  { value: '98%', label: 'Satisfied Customers' },
];
</script>
