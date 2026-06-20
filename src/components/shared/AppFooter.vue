<template>
  <footer
    class="w-full bg-[#6B4EFF] bg-cover bg-center text-white"
    style="background-image: linear-gradient(135deg, rgba(107, 78, 255, 0.92), rgba(139, 111, 255, 0.78)), url('/assets/footer-bg.png')"
  >
    <div class="mx-auto max-w-6xl px-6 py-12">
      <div class="mb-8 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div class="flex flex-col gap-2">
          <LogoMark />
          <p class="max-w-xs text-sm text-white/70">FutureSphere builds intelligent technology systems for ambitious teams.</p>
        </div>
        <nav class="flex flex-wrap gap-6">
          <RouterLink class="text-sm text-white/70 transition-colors duration-200 hover:text-white" to="/about">About</RouterLink>
          <RouterLink class="text-sm text-white/70 transition-colors duration-200 hover:text-white" to="/careers">Careers</RouterLink>
          <RouterLink class="text-sm text-white/70 transition-colors duration-200 hover:text-white" to="/blogs">Blogs</RouterLink>
          <RouterLink class="text-sm text-white/70 transition-colors duration-200 hover:text-white" to="/pricing">Pricing</RouterLink>
          <RouterLink class="text-sm text-white/70 transition-colors duration-200 hover:text-white" to="/contact">Contact Us</RouterLink>
          </nav>
      </div>
      <div class="mb-6 border-t border-white/25"></div>
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-white/70">© 2023 FutureSphere. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a class="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/25" href="https://x.com" aria-label="X">
            <svg class="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.1L6.1 22H3l7.3-8.4L2.6 2h6.5l4.5 6.4L18.9 2Zm-1.1 17.9h1.7L8.2 4H6.4l11.4 15.9Z" />
            </svg>
          </a>
          <a class="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/25" href="https://facebook.com" aria-label="Facebook">
            <svg class="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M22 12.1C22 6.5 17.5 2 11.9 2S2 6.5 2 12.1c0 5 3.7 9.2 8.5 10v-7.1H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7.1c4.8-.8 8.4-5 8.4-10Z" />
            </svg>
          </a>
          <a class="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/25" href="https://linkedin.com" aria-label="LinkedIn">
            <svg class="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.26 8h4.48v14H.26V8ZM8.02 8h4.29v1.91h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V22H17.5v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.74-2.58 3.54V22H8.02V8Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoMark from './LogoMark.vue';
</script>
