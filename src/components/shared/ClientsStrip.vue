<template>
  <section class="fade-in mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
    <span class="mb-3 block text-sm font-semibold uppercase tracking-widest text-purple-600">Our Clients</span>
    <h2 class="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Trusted by Industry Leaders</h2>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
      Join our roster of satisfied clients and experience the exceptional results and service that have earned us the trust of industry leaders worldwide.
    </p>
    <div class="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      <a
        v-for="logo in logos"
        :key="logo.name"
        class="inline-flex items-center gap-2 text-xl font-bold text-gray-400 transition-colors duration-200 hover:text-gray-600"
        href="#"
        :aria-label="logo.name"
      >
        <img class="h-6 w-6 rounded-md object-contain" :src="logo.icon" :alt="`${logo.name} icon`" />
        <span>{{ logo.name }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { logos } from '../../data/assets';
</script>
