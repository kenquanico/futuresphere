<template>
  <div class="pt-20">
    <section class="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <SectionHeader
        title="Transparent Pricing for Exceptional Value"
        subtitle="Find the perfect plan for your needs with our straightforward pricing options. Discover competitive rates and unlock the exceptional value we offer for our top-notch services."
        large
      />
      <div class="mx-auto grid max-w-5xl grid-cols-1 items-start gap-6 px-0 md:grid-cols-3">
        <PricingCard v-for="plan in plans" :key="plan.name" :plan="plan" />
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
import PricingCard from '../components/ui/PricingCard.vue';
import { useReveal } from '../composables/useReveal';

useReveal();
onMounted(() => {
  document.title = 'FutureSphere | Pricing';
});

const plans = [
  { name: 'Basic Plan', price: 0 },
  { name: 'Business Plan', price: 19, recommended: true },
  { name: 'Enterprise Plan', price: 29 },
];
</script>
