<template>
  <article
    class="relative rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
    :class="plan.recommended ? 'border-2 border-[#6B4EFF] shadow-xl md:scale-105' : 'border-gray-100'"
  >
    <span v-if="plan.recommended" class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#6B4EFF] px-4 py-1 text-xs font-semibold text-white">
      Recommended
    </span>
    <h3 class="text-center text-xl font-semibold text-gray-900">{{ plan.name }}</h3>
    <div class="my-6 flex items-end justify-center gap-1">
      <span class="text-5xl font-bold" :class="plan.price > 0 ? 'text-[#6B4EFF]' : 'text-gray-900'">
        ${{ plan.price }}
      </span>
      <span class="mb-1 text-base text-gray-400">/month</span>
    </div>
    <p class="text-center text-sm text-gray-500">Great fit for the startups</p>
    <button
      class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200"
      :class="plan.recommended ? 'bg-[#6B4EFF] text-white hover:bg-[#5538EE]' : 'border border-[#6B4EFF] text-[#6B4EFF] hover:bg-[#6B4EFF] hover:text-white'"
    >
      Get Started
    </button>
    <div class="mb-4 mt-8 flex flex-col gap-2">
      <div v-for="item in highlights" :key="item" class="flex items-center justify-between rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-600">
        <span>{{ item }}</span>
        <span>●</span>
      </div>
    </div>
    <p class="mb-4 border-t border-gray-100 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Features</p>
    <ul class="space-y-2">
      <li v-for="item in features" :key="item" class="flex items-center gap-2 text-sm text-gray-600">
        <span class="h-4 w-4 flex-shrink-0 text-purple-500" :class="included(item) ? 'text-purple-500' : 'text-gray-300'">●</span>
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
