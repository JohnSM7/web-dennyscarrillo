import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dennyscarrillo.com',
  integrations: [
    vue(),
    tailwind({ applyBaseStyles: false }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
