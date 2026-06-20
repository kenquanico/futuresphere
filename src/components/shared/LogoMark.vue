<template>
  <RouterLink to="/" class="flex items-center gap-2 text-lg font-bold text-white">
    <img
      class="h-6 w-auto transition-all duration-500"
      :class="dark ? 'brightness-0' : ''"
      src="/assets/futuresphere-logo.svg"
      alt="FutureSphere"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

withDefaults(defineProps<{ dark?: boolean }>(), {
  dark: false,
});
</script>
