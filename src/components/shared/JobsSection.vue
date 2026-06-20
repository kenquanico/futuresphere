<template>
  <section class="fade-in mx-auto max-w-6xl px-6 py-16 lg:py-24">
    <SectionHeader
      tag="Careers"
      :title="title"
      subtitle="Browse through vacancies, internships and job postings at FutureSphere"
    />
    <div class="grid gap-6">
      <JobListingRow v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { jobs } from '../../data/jobs';
import JobListingRow from './JobListingRow.vue';
import SectionHeader from './SectionHeader.vue';

withDefaults(defineProps<{ title?: string }>(), {
  title: 'New job opportunities',
});
</script>
