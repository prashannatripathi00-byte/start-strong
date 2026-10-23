/**
 * analytics.ts — Google Analytics 4 helper utilities
 *
 * Usage:
 *   import { trackEvent, trackCTAClick, trackArticleOpen } from '../utils/analytics';
 *
 * All functions are safe to call even when GA is not loaded (no-op).
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    __GA_MEASUREMENT_ID__: string;
  }
}

/** Send a custom GA4 event safely */
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/** Track CTA button clicks */
export function trackCTAClick(label: string, destination: string): void {
  trackEvent('cta_click', {
    event_category: 'CTA',
    event_label: label,
    destination,
  });
}

/** Track when an article is opened */
export function trackArticleOpen(title: string, category: string): void {
  trackEvent('article_open', {
    event_category: 'Content',
    event_label: title,
    article_category: category,
  });
}

/** Track article engagement (scroll depth) */
export function trackArticleEngagement(title: string, depthPercent: number): void {
  trackEvent('article_engagement', {
    event_category: 'Engagement',
    event_label: title,
    scroll_depth: depthPercent,
  });
}

/** Track social share button clicks */
export function trackShareClick(platform: string, articleTitle: string): void {
  trackEvent('share_click', {
    event_category: 'Social Share',
    event_label: platform,
    article_title: articleTitle,
  });
}

/** Track outbound link clicks */
export function trackOutboundClick(url: string, linkText: string): void {
  trackEvent('outbound_click', {
    event_category: 'Outbound Links',
    event_label: url,
    link_text: linkText,
  });
}

/** Track running gear guide interactions */
export function trackGearGuideClick(item: string): void {
  trackEvent('gear_guide_click', {
    event_category: 'Running Gear',
    event_label: item,
  });
}

/** Track search queries on the blog page */
export function trackSearch(searchTerm: string): void {
  trackEvent('search', {
    search_term: searchTerm,
  });
}

/** Track article scroll depth — attach to article pages */
export function initScrollDepthTracking(articleTitle: string): void {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 100];
  const reached = new Set<number>();

  function onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    thresholds.forEach(t => {
      if (percent >= t && !reached.has(t)) {
        reached.add(t);
        trackArticleEngagement(articleTitle, t);
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}
