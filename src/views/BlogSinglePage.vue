<template>
  <div class="pt-20">
    <section class="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1fr_320px]">
      <div class="flex flex-col gap-8">
      <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-3">
            <span class="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">{{ blog.category }}</span>
            <span class="text-sm text-gray-400">{{ blog.date }}</span>
          </div>
          <h1 class="mt-4 text-4xl font-bold leading-tight text-gray-900">{{ blog.title }}</h1>
        </div>
        <img :src="images.blogHero" :alt="blog.title" class="mt-8 aspect-video w-full rounded-3xl object-cover shadow-md" />
      </div>

      <article class="max-w-none text-gray-600">
        <ArticleBlock title="Maximizing Product Success: Key Strategies for Product Managers" />
        <ArticleBlock title="Develop a Strategic Product Roadmap: Guiding Your Product's Journey" />
        <img :src="images.blogInline" alt="Social engagement" class="my-8 aspect-video w-full rounded-3xl object-cover shadow-md" />
        <ArticleBlock title="Core Competencies" />
        <ArticleBlock title="Desired Qualities" />
      </article>
      </div>
      <aside class="sticky top-24 hidden h-fit flex-col gap-6 lg:flex">
        <BlogCard v-for="item in blogs.slice(1, 4)" :key="item.id" :blog="item" />
      </aside>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
      <h2 class="text-3xl font-bold text-gray-900 lg:text-4xl">Related Blogs</h2>
      <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <BlogCard v-for="item in blogs.slice(1, 4)" :key="item.id" :blog="item" />
      </div>
      <div class="mt-12 flex justify-center gap-4">
        <RouterLink to="/contact" class="inline-flex items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">Contact Us</RouterLink>
        <RouterLink to="/blogs" class="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800">View All →</RouterLink>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import AppFooter from '../components/shared/AppFooter.vue';
import BlogCard from '../components/shared/BlogCard.vue';
import { images } from '../data/assets';
import { blogs } from '../data/blogs';

const route = useRoute();
const blog = computed(() => blogs.find((item) => item.slug === route.params.slug) ?? blogs[0]);

onMounted(() => {
  document.title = `FutureSphere | ${blog.value.title}`;
});

const ArticleBlock = defineComponent({
  props: { title: { type: String, required: true } },
  setup(props) {
    const bullets = [
      'Conduct comprehensive market research and user interviews to identify pain points and preferences.',
      'Analyze customer feedback and data to uncover valuable insights.',
      'Use tools like surveys, analytics, and user testing to gather actionable data.',
    ];
    return () =>
      h('section', [
        h('h2', { class: 'mb-4 mt-10 text-2xl font-bold text-gray-900' }, props.title),
        h(
          'p',
          { class: 'mb-4 text-base leading-relaxed text-gray-600' },
          'In this blog post, we explore essential strategies and best practices that product leaders can implement to drive product success and create meaningful customer experiences.',
        ),
        h('ul', { class: 'mb-4 list-inside list-disc space-y-2 text-gray-600' }, bullets.map((item) => h('li', item))),
      ]);
  },
});
</script>
