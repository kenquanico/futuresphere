<template>
  <div class="space-y-20">
    <section class="container-page section-pad">
      <div class="card grid gap-8 p-8 md:grid-cols-[1fr_0.8fr]">
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-3">
            <span class="pill">{{ blog.category }}</span>
            <span class="text-slate-500">{{ blog.date }}</span>
          </div>
          <h1 class="mt-6 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">{{ blog.title }}</h1>
        </div>
        <img :src="images.blogHero" :alt="blog.title" class="h-72 w-full rounded-2xl object-cover" />
      </div>

      <article class="mx-auto mt-16 max-w-4xl space-y-10 text-slate-500">
        <ArticleBlock title="Maximizing Product Success: Key Strategies for Product Managers" />
        <ArticleBlock title="Develop a Strategic Product Roadmap: Guiding Your Product's Journey" />
        <img :src="images.blogInline" alt="Social engagement" class="h-96 w-full rounded-3xl object-cover" />
        <ArticleBlock title="Core Competencies" />
        <ArticleBlock title="Desired Qualities" />
      </article>
    </section>

    <section class="container-page text-center">
      <h2 class="text-4xl font-semibold tracking-tight">Related Blogs</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <BlogCard v-for="item in blogs.slice(1, 4)" :key="item.id" :blog="item" />
      </div>
      <div class="mt-8 flex justify-center gap-4">
        <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
        <RouterLink to="/blogs" class="btn text-brand-ink">View All →</RouterLink>
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
        h('h2', { class: 'text-xl font-semibold text-brand-ink' }, props.title),
        h(
          'p',
          { class: 'mt-5 leading-7' },
          'In this blog post, we explore essential strategies and best practices that product leaders can implement to drive product success and create meaningful customer experiences.',
        ),
        h('ul', { class: 'mt-3 list-disc space-y-1 pl-5 leading-6' }, bullets.map((item) => h('li', item))),
      ]);
  },
});
</script>
