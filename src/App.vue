<template>
  <AppNavbar />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavbar from './components/shared/AppNavbar.vue';
</script>
