<template>
  <div class="pt-20">
    <section class="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1fr_300px]">
      <div>
      <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div>
          <span class="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">{{ job?.department }}</span>
          <h1 class="mb-2 mt-3 text-4xl font-bold text-gray-900">{{ job?.title }}</h1>
          <p class="flex items-center gap-2">
            <span class="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">{{ job?.type }}</span>
            <span class="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">{{ job?.location }}</span>
          </p>
          <div class="mt-2 flex items-center gap-2 text-sm text-gray-500"><span class="text-purple-500">⌖</span> San Francisco</div>
          <p class="mt-2 text-sm text-gray-500">123 Main Street, Suite 200</p>
          <p class="text-sm text-purple-600">(555) 123-4567</p>
        </div>
        <div class="hidden rounded-3xl bg-[radial-gradient(circle,_#6B4EFF_2px,_transparent_3px)] bg-[length:18px_18px] opacity-80 md:block"></div>
      </div>

      <article class="mt-8 text-gray-600">
        <ContentBlock title="Education and Experience" :items="jobDetails.education" />
        <ContentBlock title="Technical Skills" :items="jobDetails.technical" />
        <ContentBlock title="Core Competencies" :items="jobDetails.competencies" />
        <ContentBlock title="Desired Qualities" :items="jobDetails.qualities" />
      </article>
      </div>
      <aside class="sticky top-24 hidden h-fit flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex">
        <h2 class="text-2xl font-bold text-gray-900">{{ job?.title }}</h2>
        <p class="flex items-center gap-2 text-sm text-gray-500">{{ job?.type }} · {{ job?.location }}</p>
        <p class="flex items-center gap-2 text-sm text-gray-500">⌖ San Francisco</p>
        <p class="text-sm text-gray-500">123 Main Street, Suite 200</p>
        <p class="text-sm text-purple-600">(555) 123-4567</p>
      </aside>
    </section>
    <JobsSection title="Related job opportunities" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppFooter from '../components/shared/AppFooter.vue';
import JobsSection from '../components/shared/JobsSection.vue';
import { jobs, jobDetails } from '../data/jobs';

const route = useRoute();
const job = computed(() => jobs.find((item) => item.slug === route.params.slug) ?? jobs[0]);

onMounted(() => {
  document.title = `FutureSphere | ${job.value.title}`;
});

const ContentBlock = defineComponent({
  props: { title: { type: String, required: true }, items: { type: Array<string>, required: true } },
  setup(props) {
    return () =>
      h('section', [
        h('h2', { class: 'mb-4 mt-8 text-xl font-semibold text-gray-900' }, props.title),
        h('p', { class: 'mb-4 text-base text-gray-600' }, `To excel in the role of ${job.value.title}, the following qualifications are typically required:`),
        h(
          'ul',
          { class: 'list-inside list-disc space-y-2 text-base text-gray-600' },
          props.items.map((item) => h('li', item)),
        ),
      ]);
  },
});
</script>
