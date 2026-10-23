/**
 * url.ts — base-path-aware URL helper
 *
 * Problem: import.meta.env.BASE_URL returns '/start-strong' (no trailing slash)
 * when `base: '/start-strong'` is set in astro.config.mjs.
 * Concatenating `${BASE_URL}page/` therefore produces `/start-strongpage/`.
 *
 * Solution: this helper always inserts exactly one `/` between the base and the path.
 *
 * Usage:
 *   import { url } from '../utils/url';
 *   url('blog/')           // → /start-strong/blog/
 *   url('blog/my-slug/')   // → /start-strong/blog/my-slug/
 *   url('')                // → /start-strong/   (site root)
 *   url('/')               // → /start-strong/
 */

const BASE = import.meta.env.BASE_URL; // e.g. '/start-strong' or '/'

export function url(path: string): string {
  // Normalise: strip trailing slash from base, strip leading slash from path,
  // then join with a single '/'.
  const base = BASE.replace(/\/$/, '');   // '/start-strong'  →  '/start-strong'
  const slug = path.replace(/^\//, '');   // 'blog/'          →  'blog/'
  return `${base}/${slug}`;              // '/start-strong/blog/'
}
