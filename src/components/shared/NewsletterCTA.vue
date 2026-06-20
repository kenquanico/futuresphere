<template>
  <section class="container-page fade-in">
    <div class="newsletter-bg rounded-3xl px-6 py-16 text-center text-white md:px-12 md:py-24">
      <div class="relative z-10 mx-auto max-w-2xl">
        <div class="mb-7 text-5xl">✉</div>
        <h2 class="text-3xl font-semibold tracking-tight md:text-5xl">Do cool things with us.</h2>
        <p class="mx-auto mt-6 max-w-md text-base text-white/80 md:text-lg">
          Stay in the loop with updates from our team and community. Once a month.
        </p>
        <form class="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl md:flex-row" @submit.prevent>
          <input
            class="min-h-12 flex-1 rounded-xl border-0 bg-white px-5 text-sm text-brand-ink outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <button class="btn btn-primary rounded-xl px-7 text-sm">Subscribe to newsletter</button>
        </form>
      </div>
    </div>
  </section>
</template>
