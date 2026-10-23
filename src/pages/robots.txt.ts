// robots.txt.ts — generates /robots.txt dynamically so SITE_URL is always correct.
// The sitemap URL is derived from the `site` config in astro.config.mjs which
// reads from the PUBLIC_SITE_URL environment variable.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (site?.toString() ?? '').replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Block build artifacts',
    'Disallow: /_assets/',
    '',
    `# Sitemap`,
    `Sitemap: ${siteUrl}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
