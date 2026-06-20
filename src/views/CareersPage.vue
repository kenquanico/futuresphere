<template>
  <div class="space-y-20">
    <section class="container-page pt-16 text-center md:pt-24">
      <h1 class="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
        Join Our Team and Shape the Future
      </h1>
      <p class="mx-auto mt-5 max-w-3xl leading-7 text-slate-500">
        Looking for an opportunity to showcase your web design skills? Join our team of talented designers, both remote and on-site, and bring your creativity to life.
      </p>
      <div class="mx-auto mt-10 grid max-w-4xl items-center gap-5 md:grid-cols-[1fr_2fr_1fr]">
        <div class="text-brand-accent"><span class="text-4xl">◎</span><p class="font-semibold">Global Presence</p></div>
        <img class="h-96 w-full rounded-3xl object-cover" :src="images.careerCollage" alt="Career collage" />
        <div class="text-brand-accent"><span class="text-4xl">✊</span><p class="font-semibold">30+<br />Talented Team Members</p></div>
      </div>
    </section>

    <section class="container-page grid items-center gap-8 md:grid-cols-2">
      <img class="fade-in h-96 w-full rounded-3xl object-cover" :src="images.careerOffice" alt="Team meeting" />
      <div class="fade-in">
        <span class="pill">Perks</span>
        <h2 class="mt-5 text-4xl font-semibold tracking-tight text-brand-ink">Perks That Go Beyond Borders</h2>
        <p class="mt-5 leading-7 text-slate-500">
          Experience a world of benefits with our global presence. Enjoy flexible work environments, cultural diversity, professional development opportunities, and competitive compensation.
        </p>
      </div>
    </section>

    <section class="container-page fade-in">
      <div class="grid gap-4 md:grid-cols-2">
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
