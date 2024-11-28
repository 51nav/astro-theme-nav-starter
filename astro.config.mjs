// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://51nav.github.io',
  //base: '/astro-theme-nav-smple',
  integrations: [
    tailwind(),
    sitemap()
  ]
});