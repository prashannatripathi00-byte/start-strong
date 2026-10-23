# 10 — Website Testing

## Testing Checklist

All tests below should be completed before the final submission. Mark each item as pass, fail or not tested.

---

## Functional Testing

### Navigation

| Test | Expected Result | Status |
|---|---|---|
| Homepage loads correctly | All sections visible, no errors | |
| Start Running page loads | Full content visible | |
| Blog listing loads | All articles displayed | |
| Individual blog articles load | Full article content displayed | |
| Running Gear page loads | Full content visible | |
| About page loads | Full content visible | |
| Contact page loads | Email link visible and functional | |
| Privacy Policy loads | Full content visible | |
| 404 page displays for invalid URL | Custom 404 page shown | |
| Desktop navigation links work | All links navigate correctly | |
| Mobile hamburger opens/closes | Menu toggles correctly | |
| Mobile nav links work | All links navigate correctly | |
| Logo links to homepage | Correct | |
| Footer links work | All links navigate to correct pages | |

### Blog System

| Test | Expected Result | Status |
|---|---|---|
| All 4 articles appear in blog listing | Correct | |
| Category filter — Beginner Running | Shows only beginner running articles | |
| Category filter — Running Gear | Shows only gear articles | |
| Category filter — All | Shows all articles | |
| Search for "beginner" | Relevant articles shown | |
| Search for "shoes" | Gear article shown | |
| No results state | Helpful message + clear button shown | |
| Article pages have correct metadata | Title, date, category visible | |
| Related articles section shown | Shows max 3 related posts | |
| Social share buttons present | Facebook, Twitter, Copy Link | |
| Copy link button copies URL | Clipboard copy works | |

### Breadcrumbs

| Test | Expected Result | Status |
|---|---|---|
| Start Running breadcrumb | Home / Start Running | |
| Blog article breadcrumb | Home / Blog / Article title | |
| About breadcrumb | Home / About | |

---

## Responsive Design Testing

| Breakpoint | Test | Status |
|---|---|---|
| 1280px (desktop) | Full layout visible, no overflow | |
| 1024px (laptop) | Layout adapts correctly | |
| 768px (tablet) | Hamburger menu appears | |
| 480px (large mobile) | Single column layout | |
| 375px (iPhone SE) | No horizontal scroll | |
| 320px (small mobile) | No overflow, readable | |

---

## SEO Testing

| Test | Expected Result | Status |
|---|---|---|
| Homepage has unique title tag | "Your Running Journey Starts Here | Start Strong" | |
| All pages have unique meta descriptions | No duplicate descriptions | |
| All pages have one H1 only | Verified via page source | |
| H2/H3 headings are logical | No heading skips | |
| Sitemap.xml accessible | `/sitemap-index.xml` returns valid XML | |
| Robots.txt accessible | `/robots.txt` returns correct content | |
| Canonical URLs set | Matches page URL | |
| Open Graph tags present | Title, description, image, URL | |
| JSON-LD on articles | Valid structured data | |
| Internal links work | All in-site links resolve | |
| No broken external links | All external URLs resolve | |
| Image alt text present | All informative images have alt text | |

---

## Accessibility Testing

| Test | Tool/Method | Status |
|---|---|---|
| Keyboard navigation | Tab through all interactive elements | |
| Skip link visible on focus | Tab to top of page | |
| Focus indicators visible | Tab through navigation | |
| Screen reader headings | Test with NVDA/VoiceOver | |
| Colour contrast (text) | Browser DevTools or axe | |
| Colour contrast (buttons) | Browser DevTools or axe | |
| Mobile tap targets | Min 44×44px touch area | |
| Reduced motion | Test with prefers-reduced-motion enabled | |
| Alt text on images | Verified in page source | |
| Form labels associated | Contact and search inputs | |

### Automated Accessibility Scan

Run the axe DevTools extension (free Chrome extension) on:
- [ ] Homepage
- [ ] Start Running page
- [ ] Blog listing
- [ ] One blog article
- [ ] Running Gear page

Record any violations and address them before submission.

---

## Performance Testing

Use Google Lighthouse (Chrome DevTools → Lighthouse tab) on the live URL.

Target scores:
| Category | Target Score |
|---|---|
| Performance | > 85 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 95 |

Record actual scores:
| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Homepage | | | | |
| Start Running | | | | |
| Blog listing | | | | |
| Blog article | | | | |
| Running Gear | | | | |

---

## Analytics Testing

| Test | Expected Result | Status |
|---|---|---|
| GA not loaded without consent | Check Network tab — no gtag.js request | |
| GA loads after Accept | gtag.js present in Network after clicking Accept | |
| GA does not load after Decline | No gtag.js request after Decline | |
| Consent persists on page reload | Cookie banner does not reappear | |
| page_view event fires | Visible in GA4 Realtime | |
| cta_click event fires | Click Start Running button; check Realtime | |
| article_engagement fires at 75% | Scroll article to 75%; check Realtime | |
| share_click fires on Facebook share | Click share button; check Realtime | |

---

## Pre-Submission Checklist

- [ ] All pages load without console errors
- [ ] All navigation links work
- [ ] Blog articles render correctly
- [ ] Mobile layout tested
- [ ] Lighthouse scores recorded
- [ ] GA4 tracking verified on live site
- [ ] Sitemap submitted to Search Console
- [ ] All assessment documents updated with real data
- [ ] Contact email is a real, monitored address
