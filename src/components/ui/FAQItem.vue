<template>
  <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
    <button class="flex w-full items-center justify-between gap-4 text-left" @click="open = !open">
      <span class="text-base font-semibold text-gray-900">{{ question }}</span>
      <span class="text-xl text-purple-600">{{ open ? '−' : '+' }}</span>
    </button>
    <p v-if="open" class="mt-3 text-sm leading-relaxed text-gray-500">{{ answer }}</p>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  question: string;
  answer: string;
}>();

const open = ref(true);
</script>
