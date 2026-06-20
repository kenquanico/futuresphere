<template>
  <article class="rounded-2xl border border-slate-100 bg-white p-6">
    <button class="flex w-full items-center justify-between gap-4 text-left" @click="open = !open">
      <span class="font-semibold text-brand-purple">{{ question }}</span>
      <span class="text-xl text-brand-accent">{{ open ? '−' : '+' }}</span>
    </button>
    <p v-if="open" class="mt-4 text-sm leading-6 text-slate-500">{{ answer }}</p>
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
