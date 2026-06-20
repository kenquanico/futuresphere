<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out" :class="scrolled ? 'px-4 pt-4' : 'h-20 bg-[#0F0A1E]'">
    <nav
      ref="navRef"
      class="relative mx-auto flex items-center justify-between transition-all duration-500 ease-out"
      :class="scrolled ? 'h-[72px] max-w-6xl rounded-3xl bg-white px-6 shadow-xl shadow-slate-900/10' : 'h-20 max-w-6xl px-6'"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        class="relative transition-transform duration-500 ease-out hover:scale-105"
        @mouseenter="handleLogoMouseEnter"
        @mouseleave="handleLogoMouseLeave"
      >
        <LogoMark :dark="scrolled" />
        <div
          v-if="showLogoMessage"
          class="absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0F0A1E] px-2 py-1 text-[10px] font-medium text-white shadow-md lg:block"
          :class="scrolled ? 'right-full mr-2' : 'left-full ml-2'"
        >
          Hi! FutureSphere is ready to launch.
        </div>
      </div>

      <div class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <div v-for="item in navItems" :key="item.label" class="relative">
          <RouterLink
            v-if="!item.children"
            :to="item.to"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300"
            :class="navTextClass"
          >
            {{ item.label }}
          </RouterLink>
          <button
            v-else
            class="rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300"
            :class="navTextClass"
            @click="toggleDropdown(item.key)"
          >
            {{ item.label }}
          </button>
          <div
            v-if="item.children && activeDropdown === item.key"
            class="absolute right-0 mt-3 min-w-[190px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/10"
          >
            <RouterLink
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              class="block w-full px-4 py-2.5 text-left text-sm text-slate-700 transition-colors duration-300 hover:bg-slate-50"
              @click="closeMenus"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
      </div>

      <RouterLink
        to="/contact"
        class="hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 lg:inline-flex"
        :class="scrolled ? 'bg-[#0F0A1E] text-white hover:bg-[#261847]' : 'bg-[#6B4EFF] text-white hover:bg-[#5538EE]'"
      >
        Contact Us
      </RouterLink>
      <button
        class="flex items-center transition-colors duration-300 lg:hidden"
        :class="scrolled ? 'text-[#0F0A1E] hover:text-[#6B4EFF]' : 'text-gray-400 hover:text-white'"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span class="text-xl leading-none">{{ open ? '×' : '☰' }}</span>
      </button>

      <div
        v-if="open"
        class="absolute left-0 right-0 flex flex-col gap-4 rounded-b-3xl border-t px-6 py-5 shadow-lg lg:hidden"
        :class="scrolled ? 'top-[72px] border-gray-100 bg-white' : 'top-20 border-gray-800 bg-[#0F0A1E]'"
      >
        <RouterLink
          v-for="item in mobileItems"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium transition-colors duration-300"
          :class="scrolled ? 'text-slate-700 hover:text-[#6B4EFF]' : 'text-gray-400 hover:text-white'"
          @click="closeMenus"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex w-fit items-center gap-2 rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]"
          @click="closeMenus"
        >
          Contact Us
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import LogoMark from './LogoMark.vue';

const open = ref(false);
const scrolled = ref(false);
const showLogoMessage = ref(false);
const activeDropdown = ref<string | null>(null);
const navRef = ref<HTMLElement | null>(null);
let logoHoverTimeout: number | undefined;

const navItems = [
  {
    key: 'about',
    label: 'About',
    to: '/about',
    children: [
      { to: '/about', label: 'Company Story' },
      { to: '/features', label: 'Features' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    key: 'careers',
    label: 'Careers',
    to: '/careers',
    children: [
      { to: '/careers', label: 'Open Roles' },
      { to: '/careers/product-manager', label: 'Product Manager' },
    ],
  },
  {
    key: 'blogs',
    label: 'Blogs',
    to: '/blogs',
    children: [
      { to: '/blogs', label: 'All Insights' },
      { to: '/blogs/email-marketing-small-businesses', label: 'Featured Article' },
    ],
  },
  { key: 'pricing', label: 'Pricing', to: '/pricing' },
];

const mobileItems = [
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/careers', label: 'Careers' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/pricing', label: 'Pricing' },
];

const navTextClass = computed(() =>
  scrolled.value ? 'text-[#353B3C] hover:text-[#6B4EFF]' : 'text-gray-400 hover:text-white',
);

function closeMenus() {
  open.value = false;
  activeDropdown.value = null;
}

function toggleDropdown(key: string) {
  activeDropdown.value = activeDropdown.value === key ? null : key;
  open.value = false;
}

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}

function handleClickOutside(event: MouseEvent) {
  if (navRef.value && !navRef.value.contains(event.target as Node)) {
    closeMenus();
  }
}

function handleLogoMouseEnter() {
  logoHoverTimeout = window.setTimeout(() => {
    showLogoMessage.value = true;
  }, 1200);
}

function handleLogoMouseLeave() {
  if (logoHoverTimeout) {
    window.clearTimeout(logoHoverTimeout);
    logoHoverTimeout = undefined;
  }
  showLogoMessage.value = false;
}

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('mousedown', handleClickOutside);
  if (logoHoverTimeout) {
    window.clearTimeout(logoHoverTimeout);
  }
});
</script>
