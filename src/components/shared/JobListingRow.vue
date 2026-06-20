<template>
  <RouterLink
    :to="`/careers/${job.slug}`"
    class="group flex items-center justify-between gap-6 rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
  >
    <div>
      <h3 class="font-semibold text-brand-ink">{{ job.title }}</h3>
      <p class="mt-2 text-sm text-slate-500">
        {{ job.type }} · <span class="font-semibold text-brand-accent">{{ job.location }}</span>
      </p>
      <p class="mt-4 max-w-2xl text-sm leading-6 text-slate-500">{{ job.description }}</p>
    </div>
    <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-accent text-2xl text-brand-accent transition group-hover:bg-brand-purple group-hover:text-white">→</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  job: {
    slug: string;
    title: string;
    type: string;
    location: string;
    description: string;
  };
}>();
</script>
