<template><div></div></template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

let lenis: any = null;
let raf = 0;

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const { default: Lenis } = await import('lenis');
  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
  });

  const tick = (time: number) => {
    lenis?.raf(time);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  // Anchor link handling
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis?.scrollTo(el as HTMLElement, { offset: -40, duration: 1.4 });
    });
  });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  lenis?.destroy?.();
});
</script>
