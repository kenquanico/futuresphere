<template>
  <section class="container-page text-center fade-in">
    <span class="pill">Our Clients</span>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">Trusted by Industry Leaders</h2>
    <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
      Join our roster of satisfied clients and experience the exceptional results and service that have earned us the trust of industry leaders worldwide.
    </p>
    <div class="mt-10 flex flex-wrap items-center justify-center gap-8">
      <span v-for="logo in logos" :key="logo" class="text-xl font-extrabold text-brand-purple md:text-2xl">
        {{ logo }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { logos } from '../../data/assets';
</script>
