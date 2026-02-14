import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Set this to your real domain (or set SITE_URL in CI) before submitting to Search Console
  site: process.env.SITE_URL ?? 'https://example.com',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
  ],
});

