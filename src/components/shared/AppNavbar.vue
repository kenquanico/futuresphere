<template>
  <header class="sticky top-0 z-50 px-3 pt-3 md:px-10">
    <nav class="container-page rounded-full bg-brand-navy px-4 py-2.5 text-white shadow-soft">
      <div class="flex items-center justify-between gap-4">
        <LogoMark />
        <div class="hidden items-center gap-8 text-sm font-medium text-white/82 md:flex">
          <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="transition hover:text-white">
            {{ link.label }}
          </RouterLink>
        </div>
        <RouterLink to="/contact" class="btn btn-primary hidden min-h-0 py-2 text-sm md:inline-flex">
          Contact Us
        </RouterLink>
        <button
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 md:hidden"
          aria-label="Toggle navigation"
          @click="open = !open"
        >
          <span class="text-xl leading-none">{{ open ? '×' : '☰' }}</span>
        </button>
      </div>
      <div v-if="open" class="mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-2xl px-3 py-2 text-sm text-white/85"
          @click="open = false"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-primary mt-2" @click="open = false">Contact Us</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LogoMark from './LogoMark.vue';

const open = ref(false);
const links = [
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/pricing', label: 'Pricing' },
];
</script>
