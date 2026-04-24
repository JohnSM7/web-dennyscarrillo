<template>
  <div ref="dot" class="cursor-dot"></div>
  <div ref="ring" class="cursor-ring"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const dot = ref<HTMLDivElement | null>(null);
const ring = ref<HTMLDivElement | null>(null);

let tx = 0, ty = 0, rx = 0, ry = 0;
let raf = 0;
let attached = false;

const move = (e: MouseEvent) => {
  tx = e.clientX; ty = e.clientY;
  if (dot.value) dot.value.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
};

const loop = () => {
  rx += (tx - rx) * 0.18;
  ry += (ty - ry) * 0.18;
  if (ring.value) ring.value.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
  raf = requestAnimationFrame(loop);
};

const handleOver = (e: Event) => {
  const t = e.target as HTMLElement | null;
  if (!t || !ring.value) return;
  if (t.closest('a, button, [data-cursor="hover"]')) {
    ring.value.classList.add('is-hover');
  }
};
const handleOut = (e: Event) => {
  const t = e.target as HTMLElement | null;
  if (!t || !ring.value) return;
  if (t.closest('a, button, [data-cursor="hover"]')) {
    ring.value.classList.remove('is-hover');
  }
};

onMounted(() => {
  if (window.matchMedia('(hover: none)').matches) return;
  attached = true;
  window.addEventListener('mousemove', move, { passive: true });
  document.addEventListener('mouseover', handleOver);
  document.addEventListener('mouseout', handleOut);
  raf = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  if (!attached) return;
  cancelAnimationFrame(raf);
  window.removeEventListener('mousemove', move);
  document.removeEventListener('mouseover', handleOver);
  document.removeEventListener('mouseout', handleOut);
});
</script>
