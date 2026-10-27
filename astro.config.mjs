
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Detect Netlify deployment automatically
const isNetlify = process.env.NETLIFY === 'true';

// Use the correct URL for each hosting platform
const SITE_URL = isNetlify
  ? 'https://startstrongyour.netlify.app'
  : (process.env.PUBLIC_SITE_URL ??
     'https://prashannatripathi00-byte.github.io/start-strong');

// Netlify uses / while GitHub Pages uses /start-strong
const BASE_PATH = isNetlify
  ? '/'
  : (process.env.PUBLIC_BASE_PATH ?? '/start-strong');

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
