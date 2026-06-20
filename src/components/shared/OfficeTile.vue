<template>
  <article class="overflow-hidden rounded-2xl bg-white">
    <img :src="office.image" :alt="`${office.city} office`" class="h-48 w-full object-cover md:h-52" />
    <div class="p-5 text-sm">
      <h3 class="font-semibold text-brand-purple">{{ office.city }}</h3>
      <p class="mt-2 text-slate-500">{{ office.address }}</p>
      <p class="mt-1 font-medium text-brand-ink">{{ office.phone }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  office: {
    city: string;
    address: string;
    phone: string;
    image: string;
  };
}>();
</script>
