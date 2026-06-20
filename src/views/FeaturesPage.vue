<template>
  <div class="pt-20">
    <section class="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <SectionHeader
        tag="Features"
        title="Discover the Tools that Drive Success"
        subtitle="Unleash innovation and accelerate growth with our dynamic product."
      />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
