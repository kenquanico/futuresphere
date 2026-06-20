<template>
  <article
    class="relative rounded-2xl border bg-white p-8 transition hover:-translate-y-1 hover:shadow-soft"
    :class="plan.recommended ? 'border-brand-accent shadow-soft' : 'border-slate-100'"
  >
    <span v-if="plan.recommended" class="pill absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      Recommended
    </span>
    <h3 class="text-center text-xl font-semibold text-brand-ink">{{ plan.name }}</h3>
    <div class="mt-8 text-center">
      <span class="text-5xl font-semibold" :class="plan.recommended ? 'text-brand-purple' : 'text-brand-ink'">
        ${{ plan.price }}
      </span>
      <span class="text-slate-500">/month</span>
    </div>
    <p class="mt-5 text-center text-sm text-slate-500">Great fit for the startups</p>
    <button class="btn mt-6 w-full" :class="plan.recommended ? 'btn-primary' : 'btn-outline'">Get Started</button>
    <div class="mt-8 grid gap-3">
      <div v-for="item in highlights" :key="item" class="flex items-center justify-between rounded-md bg-purple-50 px-3 py-2 text-xs font-semibold text-brand-accent">
        <span>{{ item }}</span>
        <span>●</span>
      </div>
    </div>
    <p class="mt-6 text-xs font-semibold text-slate-400">Features</p>
    <ul class="mt-3 space-y-3 text-sm text-brand-ink">
      <li v-for="item in features" :key="item" class="flex gap-2">
        <span :class="included(item) ? 'text-brand-purple' : 'text-slate-400'">●</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const highlights = ['Responsive Website Design', 'Basic SEO Optimization', '24/7 Customer Support'];
const features = [
  'Unlimited Bandwidth',
  'Custom Domain',
  'Secure SSL Certificate',
  'Priority Customer Support',
  'Advanced Analytics and Reporting',
  'E-commerce Integration',
];

defineProps<{
  plan: {
    name: string;
    price: number;
    recommended?: boolean;
  };
}>();

const included = (item: string) => item !== 'Advanced Analytics and Reporting' || true;
</script>
