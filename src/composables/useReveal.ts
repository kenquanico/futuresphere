import { onBeforeUnmount, onMounted } from 'vue';

export function useReveal() {
  let observer: IntersectionObserver | undefined;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer?.observe(el));
  });

  onBeforeUnmount(() => observer?.disconnect());
}
