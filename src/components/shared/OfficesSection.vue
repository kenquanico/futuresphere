<template>
  <section class="fade-in mx-auto max-w-6xl px-6 py-16 lg:py-24">
    <SectionHeader
      tag="Our Offices"
      title="Discover Our Global Network of Offices"
      subtitle="Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are."
    />
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <OfficeTile v-for="office in offices" :key="office.city" :office="office" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { offices } from '../../data/offices';
import OfficeTile from './OfficeTile.vue';
import SectionHeader from './SectionHeader.vue';
</script>
