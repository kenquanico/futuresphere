<template>
  <div class="pt-20">
    <section class="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <SectionHeader
        title="Contact Us"
        subtitle="At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change."
      />

      <div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <form class="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" @submit.prevent="submit">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-semibold text-gray-900">First Name<input v-model="form.firstName" class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100" placeholder="Ali" /></label>
            <label class="grid gap-2 text-sm font-semibold text-gray-900">Last Name<input v-model="form.lastName" class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100" placeholder="Osama" /></label>
          </div>
          <label class="grid gap-2 text-sm font-semibold text-gray-900">Email<input v-model="form.email" class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100" placeholder="osama17007@gmail.com" /></label>
          <label class="grid gap-2 text-sm font-semibold text-gray-900">Subject<input v-model="form.subject" class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100" placeholder="Osama" /></label>
          <div>
            <p class="text-sm font-semibold text-gray-900">Services</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-for="item in 4" :key="item" class="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">Label</span>
            </div>
          </div>
          <label class="grid gap-2 text-sm font-semibold text-gray-900">Messages<textarea v-model="form.message" class="min-h-36 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100" placeholder="Add Text"></textarea></label>
          <label class="flex items-center gap-3 text-sm text-gray-500">
            <input v-model="form.agree" type="checkbox" class="accent-purple-600" />
            I agree with terms of usage and privacy policy.
          </label>
          <p v-if="error" class="text-sm font-semibold text-red-500">{{ error }}</p>
          <p v-if="success" class="text-sm font-semibold text-purple-600">Thanks. Your message is ready for our team.</p>
          <button class="inline-flex w-fit items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">Submit</button>
        </form>
        <div class="mx-auto h-80 w-64 bg-gradient-to-b from-[#6B4EFF] via-purple-300 to-white shadow-xl [clip-path:polygon(50%_0,100%_25%,100%_70%,50%_100%,0_70%,0_25%)]"></div>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div v-for="channel in channels" :key="channel.label" class="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">{{ channel.icon }}</div>
          <h3 class="text-sm font-semibold text-gray-900">{{ channel.label }}</h3>
          <p class="text-sm text-gray-500">{{ channel.email }}</p>
        </div>
      </div>
    </section>

    <OfficesSection />

    <section class="fade-in mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <SectionHeader
        tag="FAQs"
        title="Answers to some of your questions"
        subtitle="Don't find the answers you were looking for? Contact us at futuresphere@gmail.com"
      />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FAQItem v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />
      </div>
      <div class="mt-12 text-center">
        <button class="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800">View All ↓</button>
      </div>
    </section>

    <NewsletterCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import AppFooter from '../components/shared/AppFooter.vue';
import NewsletterCTA from '../components/shared/NewsletterCTA.vue';
import OfficesSection from '../components/shared/OfficesSection.vue';
import SectionHeader from '../components/shared/SectionHeader.vue';
import FAQItem from '../components/ui/FAQItem.vue';
import { useReveal } from '../composables/useReveal';
import { faqs } from '../data/faqs';

useReveal();
onMounted(() => {
  document.title = 'FutureSphere | Contact';
});

const form = reactive({ firstName: '', lastName: '', email: '', subject: '', message: '', agree: false });
const error = ref('');
const success = ref(false);
const channels = [
  { icon: '▣', label: 'Sales and Business', email: 'abc1234@gmail.com' },
  { icon: '🤝', label: 'Partners', email: 'partners1234@gmail.com' },
  { icon: '◕', label: 'Customer Support', email: 'support1234@gmail.com' },
];

function submit() {
  success.value = false;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  if (!form.firstName || !form.lastName || !form.email || !form.subject || !form.message || !form.agree) {
    error.value = 'Please complete all fields and accept the policy.';
    return;
  }
  if (!emailOk) {
    error.value = 'Please enter a valid email address.';
    return;
  }
  error.value = '';
  success.value = true;
}
</script>
