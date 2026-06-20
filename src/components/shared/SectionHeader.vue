<template>
  <div class="mx-auto max-w-3xl text-center">
    <span v-if="tag" class="pill">{{ tag }}</span>
    <h1 :class="['mt-4 font-semibold tracking-tight text-brand-ink', large ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl']">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
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
