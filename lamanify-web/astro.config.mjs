import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.lamanify.com',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      // Filter out admin pages from sitemap
      filter: (page) => !page.includes('/admin/'),
      // Customize change frequency for different page types
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
});