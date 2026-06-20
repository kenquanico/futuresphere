<template>
  <section class="fade-in px-6 py-24">
    <div class="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gray-950 bg-cover bg-center" style="background-image: url('/assets/newsletter-bg.png')">
      <div class="absolute inset-0 bg-black/15"></div>
      <div class="relative z-10 flex flex-col items-center px-8 py-20 text-center">
        <div class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white">✉</div>
        <h2 class="mb-4 text-4xl font-bold text-white">Do cool things with us.</h2>
        <p class="mb-10 max-w-md text-base leading-relaxed text-gray-400">
          Stay in the loop with updates from our team and community. Once a month.
        </p>
        <form class="flex w-full max-w-md flex-col gap-3 sm:flex-row" @submit.prevent>
          <input
            class="flex-1 rounded-full border border-white/30 bg-white px-5 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-purple-400 focus:outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <button class="whitespace-nowrap rounded-full bg-[#6B4EFF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5538EE]">
            Subscribe to newsletter
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
