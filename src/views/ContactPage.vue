<template>
  <div class="space-y-20">
    <section class="container-page section-pad">
      <SectionHeader
        title="Contact Us"
        subtitle="At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change."
      />

      <div class="mt-14 grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <form class="card grid gap-5 p-6" @submit.prevent="submit">
          <div class="grid gap-4 md:grid-cols-2">
            <label class="grid gap-2 text-sm font-semibold">First Name<input v-model="form.firstName" class="rounded-lg border border-slate-200 px-4 py-3 font-normal" placeholder="Ali" /></label>
            <label class="grid gap-2 text-sm font-semibold">Last Name<input v-model="form.lastName" class="rounded-lg border border-slate-200 px-4 py-3 font-normal" placeholder="Osama" /></label>
          </div>
          <label class="grid gap-2 text-sm font-semibold">Email<input v-model="form.email" class="rounded-lg border border-slate-200 px-4 py-3 font-normal" placeholder="osama17007@gmail.com" /></label>
          <label class="grid gap-2 text-sm font-semibold">Subject<input v-model="form.subject" class="rounded-lg border border-slate-200 px-4 py-3 font-normal" placeholder="Osama" /></label>
          <div>
            <p class="text-sm font-semibold">Services</p>
            <div class="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span v-for="item in 4" :key="item" class="rounded-full bg-slate-50 px-3 py-1">Label</span>
            </div>
          </div>
          <label class="grid gap-2 text-sm font-semibold">Messages<textarea v-model="form.message" class="min-h-36 rounded-lg border border-slate-200 px-4 py-3 font-normal" placeholder="Add Text"></textarea></label>
          <label class="flex items-start gap-2 text-xs text-slate-600">
            <input v-model="form.agree" type="checkbox" class="mt-1" />
            I agree with terms of usage and privacy policy.
          </label>
          <p v-if="error" class="text-sm font-semibold text-red-500">{{ error }}</p>
          <p v-if="success" class="text-sm font-semibold text-brand-purple">Thanks. Your message is ready for our team.</p>
          <button class="btn btn-primary w-fit">Submit</button>
        </form>
        <div class="mx-auto h-80 w-64 bg-gradient-to-b from-brand-accent via-purple-300 to-white shadow-soft [clip-path:polygon(50%_0,100%_25%,100%_70%,50%_100%,0_70%,0_25%)]"></div>
      </div>

      <div class="card mt-10 grid gap-4 p-6 text-center md:grid-cols-3">
        <div v-for="channel in channels" :key="channel.label" class="border-slate-100 py-5 md:border-r last:border-r-0">
          <div class="text-4xl text-brand-accent">{{ channel.icon }}</div>
          <h3 class="mt-3 font-semibold">{{ channel.label }}</h3>
          <p class="text-sm text-slate-500">{{ channel.email }}</p>
        </div>
      </div>
    </section>

    <OfficesSection />

    <section class="container-page fade-in">
      <SectionHeader
        tag="FAQs"
        title="Answers to some of your questions"
        subtitle="Don't find the answers you were looking for? Contact us at futuresphere@gmail.com"
      />
      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <FAQItem v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />
      </div>
      <div class="mt-8 text-center">
        <button class="btn text-brand-ink">View All ↓</button>
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
