<template>
  <RouterLink
    :to="`/blogs/${blog.slug}`"
    class="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
  >
    <img :src="blog.image" :alt="blog.title" class="aspect-video w-full rounded-t-2xl object-cover" />
    <div class="p-5">
      <span class="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">{{ blog.category }}</span>
      <h3 class="mb-2 mt-3 line-clamp-2 text-base font-semibold text-gray-900">{{ blog.title }}</h3>
      <p class="line-clamp-3 text-sm leading-relaxed text-gray-500">{{ blog.excerpt }}</p>
      <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800">
        Read more →
      </span>
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
