<template>
  <RouterLink to="/" class="flex items-center gap-2 font-extrabold tracking-tight">
    <span class="grid h-6 w-6 grid-cols-2 gap-0.5 rounded-full text-white">
      <span v-for="i in 4" :key="i" class="h-2.5 w-2.5 rounded-full bg-white"></span>
    </span>
    <span>FutureSphere</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
