<template>
  <div class="space-y-20">
    <section class="container-page section-pad">
      <SectionHeader
        tag="Features"
        title="Discover the Tools that Drive Success"
        subtitle="Unleash innovation and accelerate growth with our dynamic product."
      />
      <div class="card mt-14 grid divide-y divide-slate-100 p-8 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
        <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
      </div>
    </section>
    <NewsletterCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppFooter from '../components/shared/AppFooter.vue';
import NewsletterCTA from '../components/shared/NewsletterCTA.vue';
import SectionHeader from '../components/shared/SectionHeader.vue';
import FeatureCard from '../components/ui/FeatureCard.vue';
import { useReveal } from '../composables/useReveal';
import { features } from '../data/features';

useReveal();
onMounted(() => {
  document.title = 'FutureSphere | Features';
});
</script>
