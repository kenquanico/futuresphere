<template>
  <RouterLink
    :to="`/blogs/${blog.slug}`"
    class="group block overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 transition hover:-translate-y-1 hover:shadow-soft"
  >
    <img :src="blog.image" :alt="blog.title" class="h-48 w-full rounded-xl object-cover" />
    <div class="p-3">
      <span class="pill !px-2.5 !py-1 !text-xs">{{ blog.category }}</span>
      <h3 class="mt-3 text-lg font-semibold leading-snug text-brand-ink">{{ blog.title }}</h3>
      <p class="mt-3 line-clamp-4 text-sm leading-6 text-slate-500">{{ blog.excerpt }}</p>
      <span class="mt-4 inline-flex text-sm font-semibold text-slate-500 underline">Read more</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  blog: {
    slug: string;
    title: string;
    category: string;
    image: string;
    excerpt: string;
  };
}>();
</script>
