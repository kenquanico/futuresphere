<template>
  <div class="mb-16 text-center">
    <span v-if="tag" class="mb-3 block text-sm font-semibold uppercase tracking-widest text-purple-600">{{ tag }}</span>
    <h1 :class="['mb-4 font-bold tracking-tight text-gray-900', large ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl']">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tag?: string;
  title: string;
  subtitle?: string;
  large?: boolean;
}>();
</script>
