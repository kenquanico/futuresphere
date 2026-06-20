<template>
  <article class="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
    <div class="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-600">
      {{ icon }}
    </div>
    <h3 class="mb-2 text-lg font-semibold text-gray-900">{{ title }}</h3>
    <p class="text-sm leading-relaxed text-gray-500">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  title: string;
  description: string;
}>();
</script>
