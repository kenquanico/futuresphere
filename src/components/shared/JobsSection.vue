<template>
  <section class="container-page fade-in">
    <SectionHeader
      tag="Careers"
      :title="title"
      subtitle="Browse through vacancies, internships and job postings at FutureSphere"
    />
    <div class="mt-12 grid gap-4">
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
