import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────────────────────
// Site URL and base path configuration
//
// Set these via environment variables so they never need to be hardcoded:
//
//   LOCAL: create a `.env` file in this directory with:
//     PUBLIC_SITE_URL=https://yourusername.github.io/start-strong
//     PUBLIC_BASE_PATH=/start-strong
//
//   GITHUB ACTIONS: add repository secrets / variables:
//     PUBLIC_SITE_URL  →  https://yourusername.github.io/start-strong
//     PUBLIC_BASE_PATH →  /start-strong          (or / for a custom domain)
//
// For a custom domain (e.g. https://www.startstrong.run) set:
//     PUBLIC_SITE_URL=https://www.startstrong.run
//     PUBLIC_BASE_PATH=/
// ─────────────────────────────────────────────────────────────────────────────
const SITE_URL  = process.env.PUBLIC_SITE_URL  ?? 'https://yourusername.github.io/start-strong';
const BASE_PATH = process.env.PUBLIC_BASE_PATH ?? '/start-strong';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [
    sitemap(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
