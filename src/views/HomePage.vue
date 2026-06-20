<template>
  <div class="space-y-20 pb-2">
    <section class="container-page pt-16 text-center md:pt-24">
      <h1 class="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-brand-ink md:text-7xl">
        Revolutionizing the Future with Cutting-Edge Technology
      </h1>
      <p class="mt-5 text-slate-500">Empowering Innovation for a Digital Tomorrow</p>
      <div class="mt-7 flex justify-center gap-3">
        <RouterLink to="/careers" class="btn btn-outline !border-brand-navy !bg-brand-navy !text-white">Signup</RouterLink>
        <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
      </div>
      <div class="abstract-tech mx-auto mt-10 h-64 max-w-5xl rounded-[3rem] md:h-80"></div>
      <div class="card mx-auto -mt-6 grid max-w-4xl gap-4 p-6 md:grid-cols-3">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold text-brand-accent">{{ stat.value }}</div>
          <div class="text-sm text-slate-500">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="container-page fade-in text-center">
      <SectionHeader
        tag="Features"
        title="Discover the Tools that Drive Success"
        subtitle="Unleash innovation and accelerate growth with our dynamic product."
      />
      <div class="card mt-12 grid divide-y divide-slate-100 p-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        <FeatureCard v-for="feature in features.slice(0, 3)" :key="feature.title" :feature="feature" />
      </div>
      <div class="mt-8 flex justify-center gap-4">
        <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
        <RouterLink to="/features" class="btn text-brand-ink">View All →</RouterLink>
      </div>
    </section>

    <section class="container-page card fade-in grid items-center gap-8 p-5 md:grid-cols-2 md:p-8">
      <div class="order-2 md:order-1">
        <span class="pill">Our Mission Statement</span>
        <h2 class="mt-5 text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
          Empowering the world through transformative technology solutions
        </h2>
        <p class="mt-5 leading-7 text-slate-500">
          We are dedicated to empowering individuals, businesses, and communities by providing innovative and cutting-edge technology solutions that unlock new possibilities and drive positive change.
        </p>
        <div class="mt-7 flex gap-3">
          <RouterLink to="/careers" class="btn btn-outline !border-brand-navy !bg-brand-navy !text-white">Signup</RouterLink>
          <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
        </div>
      </div>
      <img class="order-1 h-80 w-full rounded-2xl object-cover md:order-2" :src="images.team" alt="FutureSphere team" />
    </section>

    <ClientsStrip />

    <section class="container-page card fade-in grid items-center gap-8 p-5 md:grid-cols-2 md:p-8">
      <div>
        <span class="pill">Services</span>
        <h2 class="mt-5 text-4xl font-semibold tracking-tight text-brand-accent">Streamlined Business Operations</h2>
        <p class="mt-5 leading-7 text-slate-500">
          Our technology solutions streamline and optimize business operations, automating processes, improving efficiency, and increasing overall productivity.
        </p>
      </div>
      <img class="h-80 w-full rounded-2xl object-cover" :src="images.office" alt="Office team" />
    </section>

    <section class="container-page fade-in">
      <SectionHeader tag="Testimonials" title="1M+ Global Customers" />
      <div class="card mt-10 grid items-center gap-8 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <img class="h-80 w-full rounded-2xl object-cover grayscale" :src="images.customer" alt="Sarah Thompson" />
        <div>
          <p class="leading-7 text-slate-500">
            I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our operations.
          </p>
          <h3 class="mt-6 font-semibold">Sarah Thompson</h3>
          <p class="text-sm text-slate-500">CEO, Thompson Enterprises</p>
          <div class="mt-6 flex gap-3 text-brand-accent">
            <button class="grid h-10 w-10 place-items-center rounded-full border">←</button>
            <button class="grid h-10 w-10 place-items-center rounded-full bg-brand-accent text-white">→</button>
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-wrap justify-center gap-8 text-xl font-bold text-brand-accent">
        <span v-for="logo in partnerLogos" :key="logo">{{ logo }}</span>
      </div>
    </section>

    <section class="container-page fade-in text-center">
      <SectionHeader tag="Blog" title="From our Latest Blogs" />
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <BlogCard v-for="blog in blogs.slice(1, 4)" :key="blog.id" :blog="blog" />
      </div>
      <div class="mt-8 flex justify-center gap-4">
        <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
        <RouterLink to="/blogs" class="btn text-brand-ink">View All →</RouterLink>
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
