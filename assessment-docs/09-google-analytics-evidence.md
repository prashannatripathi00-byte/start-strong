# 09 — Google Analytics Evidence

## Google Analytics 4 — Setup and Evidence Collection Guide

> **Important:** This document explains how to connect GA4, what to measure and how to collect evidence. No analytics data is presented here because the site has not yet been live long enough to generate meaningful data. All data presented in the final assessment must be real data from the live website. Do not invent or approximate figures.

---

## GA4 Setup Instructions

### Step 1: Create a GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with a Google account
3. Click **Admin** (gear icon, bottom left)
4. Click **+ Create** → **Property**
5. Name it "Start Strong"
6. Set timezone and currency
7. Complete the business details
8. Choose "Web" as the platform
9. Enter your website URL: `https://yourusername.github.io/start-strong/`
10. Note your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Add the Measurement ID to the Website

In `src/layouts/BaseLayout.astro`, locate:
```js
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```
Replace with your real Measurement ID. Rebuild and redeploy.

### Step 3: Verify Tracking is Working

1. Visit the live website and accept the cookie consent banner
2. In GA4, go to **Reports → Realtime**
3. You should see your visit appear within 30 seconds

---

## Events Implemented

The following GA4 events are implemented in the website code:

| Event Name | Trigger | Parameters |
|---|---|---|
| `page_view` | Every page load (automatic) | `page_title`, `page_location` |
| `cta_click` | CTA button clicks | `event_label`, `destination` |
| `article_open` | Blog article title click | `event_label` (article title) |
| `article_engagement` | Scroll depth 25/50/75/100% | `event_label`, `scroll_depth` |
| `share_click` | Social share button | `event_label` (platform) |
| `social_click` | Footer social icon | `event_label` (platform) |
| `outbound_click` | External link clicks | `event_label` (URL) |
| `search` | Blog search input | `search_term` |
| `gear_guide_click` | Running gear items | `event_label` |

---

## Key Metrics to Collect for Assessment

### 1. Active Users and Sessions

**Where to find:** Reports → Acquisition → Overview

Evidence to collect:
- Total users over the measurement period
- New vs. returning users
- Sessions per user
- Screenshot of the overview report

---

### 2. Traffic Acquisition Sources

**Where to find:** Reports → Acquisition → Traffic acquisition

Evidence to collect:
- Sessions by channel (Organic Search, Direct, Social, Referral)
- Percentage of traffic from each source
- Which source drives the most engaged sessions

---

### 3. Most Visited Pages

**Where to find:** Reports → Engagement → Pages and screens

Evidence to collect:
- Top pages by views
- Engagement rate per page
- Average engagement time per page
- Screenshot of the report

---

### 4. Engagement Rate

**Where to find:** Reports → Engagement → Overview

Evidence to collect:
- Overall engagement rate (GA4 defines this as sessions with ≥10 seconds, ≥1 page view, or ≥1 conversion event)
- Compare engagement rate across different pages
- Look for pages significantly below average — potential improvement opportunities

---

### 5. Average Engagement Time

**Where to find:** Reports → Engagement → Pages and screens

Evidence to collect:
- Average engagement time per page
- Which articles have the longest engagement time
- Which pages have very short engagement time (below 30 seconds — possible issue)

---

### 6. Event Counts

**Where to find:** Reports → Engagement → Events

Evidence to collect:
- Total events fired during the period
- `cta_click` count and breakdown by label
- `article_open` count
- `article_engagement` events at 75% and 100% scroll depth
- `share_click` count by platform

---

### 7. Mobile vs. Desktop

**Where to find:** Reports → User attributes → Tech → Device category

Evidence to collect:
- Percentage of sessions on mobile vs. desktop vs. tablet
- Compare engagement rate and time between devices
- Identify any device-specific issues

---

### 8. Search Traffic

**Where to find:** Connect Google Search Console to GA4 via Admin → Search Console Links

Evidence to collect (from Search Console):
- Impressions for target keywords
- Average position for target keywords
- Click-through rates
- Which queries drive the most traffic

---

### 9. Content Performance Comparison

Compare the four initial articles on:
- Total views
- Average engagement time
- Scroll depth events (article_engagement at 75%+)

This comparison informs which content is most valuable and which may need improvement.

---

### 10. Impact of Website Changes

For the improvement evidence requirement, use this template:

| Field | Entry |
|---|---|
| Observation | What you noticed in the data |
| Supporting analytics | Specific metric and value |
| Identified problem | Root cause hypothesis |
| Proposed change | What was changed |
| Date of change | Specific date |
| Post-change data | Metric after change (add once available) |
| Conclusion | Did the change improve the metric? |

**Example:**

| Field | Entry |
|---|---|
| Observation | The "Start Running" page has a lower engagement rate than the blog articles |
| Supporting analytics | Engagement rate: Start Running 28% vs Blog average 52% |
| Identified problem | The page may be too long and overwhelming — users leave before reaching the training plan |
| Proposed change | Add a sticky "Jump to the Plan" button; move the 4-week plan higher on the page |
| Date of change | [to be filled in after change is made] |
| Post-change data | [to be filled in after 7+ days of post-change data] |
| Conclusion | [to be filled in once data is available] |

---

## Analytics Evidence Collection Checklist

- [ ] GA4 property created
- [ ] Measurement ID added to website
- [ ] Cookie consent tested (analytics only fires after "Accept")
- [ ] Real-time report confirms tracking is working
- [ ] At least 2 weeks of live data collected
- [ ] Screenshots captured of: Acquisition report, Pages report, Events report
- [ ] Search Console connected and sitemap submitted
- [ ] Keyword impression data captured from Search Console
- [ ] At least one improvement made and documented
- [ ] Post-improvement data captured (where available)
