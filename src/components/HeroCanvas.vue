<template>
  <canvas ref="cv" class="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-80"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const cv = ref<HTMLCanvasElement | null>(null);
let raf = 0;
let mouse = { x: 0.5, y: 0.5 };

onMounted(() => {
  const canvas = cv.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  const onResize = () => resize();
  window.addEventListener('resize', onResize);

  const onMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) / rect.width;
    mouse.y = (e.clientY - rect.top) / rect.height;
  };
  window.addEventListener('mousemove', onMove);

  const colors = ['#FF4D6D', '#FF8A3D', '#FFCE3A', '#2CE6D7', '#A86BFF', '#FF4ECD'];
  const COUNT = window.matchMedia('(max-width: 768px)').matches ? 40 : 90;

  type P = { x: number; y: number; r: number; vx: number; vy: number; c: string; a: number };
  const particles: P[] = Array.from({ length: COUNT }).map(() => ({
    x: Math.random() * canvas.clientWidth,
    y: Math.random() * canvas.clientHeight,
    r: Math.random() * 2.2 + 0.5,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    c: colors[Math.floor(Math.random() * colors.length)],
    a: Math.random() * 0.7 + 0.3,
  }));

  const loop = () => {
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    ctx.clearRect(0, 0, W, H);

    // Subtle connecting lines near cursor
    const mx = mouse.x * W;
    const my = mouse.y * H;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      const dx = p.x - mx;
      const dy = p.y - my;
      const d = Math.hypot(dx, dy);
      if (d < 160) {
        p.x += (dx / d) * 0.6;
        p.y += (dy / d) * 0.6;
      }

      ctx.beginPath();
      ctx.fillStyle = p.c;
      ctx.globalAlpha = p.a;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = p.a * 0.25;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    raf = requestAnimationFrame(loop);
  };
  loop();

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('mousemove', onMove);
  });
});
</script>
