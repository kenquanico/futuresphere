<template>
  <RouterLink
    :to="`/careers/${job.slug}`"
    class="group flex items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
  >
    <div class="flex flex-col gap-1">
      <h3 class="text-base font-semibold text-gray-900">{{ job.title }}</h3>
      <p class="mt-1 flex items-center gap-2">
        <span class="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">{{ job.type }}</span>
        <span
          class="inline-block rounded-full px-3 py-1 text-xs font-semibold"
          :class="job.location === 'Remote' ? 'bg-sky-50 text-sky-600' : 'bg-purple-50 text-purple-600'"
        >
          {{ job.location }}
        </span>
      </p>
      <p class="mt-2 max-w-2xl text-sm text-gray-500">{{ job.description }}</p>
    </div>
    <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-200 group-hover:border-purple-500 group-hover:text-purple-600">→</span>
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
