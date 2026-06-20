<template>
  <div class="pt-20">
    <section class="mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
      <h1 class="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Join Our Team and Shape the Future
      </h1>
      <p class="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
        Looking for an opportunity to showcase your web design skills? Join our team of talented designers, both remote and on-site, and bring your creativity to life.
      </p>
      <div class="mx-auto mt-8 flex flex-col items-center justify-center gap-10 md:flex-row">
        <div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">◎</span><p><span class="block text-2xl font-bold text-gray-900">Global</span><span class="text-sm text-gray-500">Presence</span></p></div>
        <div class="grid max-w-md grid-cols-2 gap-3">
          <img class="aspect-square w-full rounded-2xl object-cover" :src="images.careerCollage" alt="Career collage" />
          <img class="aspect-square w-full rounded-2xl object-cover" :src="images.careerOffice" alt="Career collage" />
          <img class="aspect-square w-full rounded-2xl object-cover" :src="images.office" alt="Career collage" />
          <img class="aspect-square w-full rounded-2xl object-cover" :src="images.team" alt="Career collage" />
        </div>
        <div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">✊</span><p><span class="block text-2xl font-bold text-gray-900">30+</span><span class="text-sm text-gray-500">Team Members</span></p></div>
      </div>
    </section>

    <section class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:py-24">
      <img class="fade-in aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" :src="images.careerOffice" alt="Team meeting" />
      <div class="fade-in">
        <span class="mb-3 block text-sm font-semibold uppercase tracking-widest text-purple-600">Perks</span>
        <h2 class="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Perks That Go Beyond Borders</h2>
        <p class="text-lg leading-relaxed text-gray-500">
          Experience a world of benefits with our global presence. Enjoy flexible work environments, cultural diversity, professional development opportunities, and competitive compensation.
        </p>
      </div>
    </section>

    <section class="fade-in mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SimpleCard v-for="perk in perks" :key="perk.title" icon="✦" :title="perk.title" :description="perk.description" />
      </div>
    </section>

    <OfficesSection />
    <JobsSection />
    <NewsletterCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppFooter from '../components/shared/AppFooter.vue';
import JobsSection from '../components/shared/JobsSection.vue';
import NewsletterCTA from '../components/shared/NewsletterCTA.vue';
import OfficesSection from '../components/shared/OfficesSection.vue';
import SimpleCard from '../components/ui/SimpleCard.vue';
import { useReveal } from '../composables/useReveal';
import { images } from '../data/assets';
import { perks } from '../data/perks';

useReveal();
onMounted(() => {
  document.title = 'FutureSphere | Careers';
});
</script>
