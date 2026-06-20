<template>
  <footer class="footer-gradient mt-20 text-white">
    <div class="container-page py-12">
      <div class="border-y border-white/25 py-8">
        <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <LogoMark />
          <nav class="flex flex-wrap gap-6 text-sm text-white/80">
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/careers">Careers</RouterLink>
            <RouterLink to="/blogs">Blogs</RouterLink>
            <RouterLink to="/pricing">Pricing</RouterLink>
            <RouterLink to="/contact">Contact Us</RouterLink>
          </nav>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>© 2023 FutureSphere. All rights reserved.</p>
        <div class="flex gap-4 text-lg text-white">
          <a href="#" aria-label="Twitter">♥</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoMark from './LogoMark.vue';
</script>
