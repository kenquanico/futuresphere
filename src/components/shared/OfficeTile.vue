<template>
  <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
    <img :src="office.image" :alt="`${office.city} office`" class="mb-4 aspect-video w-full rounded-2xl object-cover" />
    <div class="text-sm">
      <h3 class="text-base font-semibold text-gray-900">{{ office.city }}</h3>
      <p class="mt-2 text-sm text-gray-500">{{ office.address }}</p>
      <p class="mt-1 text-sm text-purple-600">{{ office.phone }}</p>
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
