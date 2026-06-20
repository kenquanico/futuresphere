<template>
  <article class="px-8 py-8 text-center">
    <div class="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-purple-100 text-3xl text-brand-purple">
      {{ feature.icon }}
    </div>
    <h3 class="mt-5 text-2xl font-semibold leading-tight text-brand-ink">{{ feature.title }}</h3>
    <p class="mx-auto mt-5 max-w-xs text-base leading-7 text-slate-500">{{ feature.description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  feature: {
    icon: string;
    title: string;
    description: string;
  };
}>();
</script>
