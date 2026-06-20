<template>
  <article class="rounded-2xl border border-slate-100 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-soft">
    <div class="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-purple-100 text-2xl text-brand-purple">
      {{ icon }}
    </div>
    <h3 class="mt-5 text-lg font-semibold text-brand-ink">{{ title }}</h3>
    <p class="mt-4 text-sm leading-6 text-slate-500">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  title: string;
  description: string;
}>();
</script>
