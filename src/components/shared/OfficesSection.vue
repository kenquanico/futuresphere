<template>
  <section class="container-page fade-in">
    <SectionHeader
      tag="Our Offices"
      title="Discover Our Global Network of Offices"
      subtitle="Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are."
    />
    <div class="card mt-12 grid gap-5 p-5 md:grid-cols-3">
      <OfficeTile v-for="office in offices" :key="office.city" :office="office" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { offices } from '../../data/offices';
import OfficeTile from './OfficeTile.vue';
import SectionHeader from './SectionHeader.vue';
</script>
