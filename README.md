# Start Strong — Running & Fitness Website

> **Your Running Journey Starts Here**

Start Strong is a beginner-friendly running and fitness information platform built with Astro and deployed to GitHub Pages. Developed as part of a university Digital Marketing Project assessment.

---

## Local Development

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321/start-strong/`

### Build for production

```bash
npm run build
```

The static output is generated in the `./dist` directory.

### Preview the production build locally

```bash
npm run preview
```

---

## Project Structure

```
start-strong/
├── public/                   # Static assets (images, icons, robots.txt)
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── Header.astro      # Site navigation
│   │   ├── Footer.astro      # Site footer
│   │   ├── ArticleCard.astro # Blog post card
│   │   ├── CTASection.astro  # Call-to-action sections
│   │   ├── SocialShare.astro # Article share buttons
│   │   └── CookieConsent.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro  # HTML shell with SEO meta
│   │   └── ArticleLayout.astro
│   ├── content/
│   │   └── blog/             # Markdown article files
│   ├── pages/                # Route pages
│   │   ├── index.astro       # Homepage /
│   │   ├── start-running.astro
│   │   ├── running-gear.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── 404.astro
│   │   └── blog/
│   │       ├── index.astro   # Blog listing
│   │       └── [slug].astro  # Dynamic article pages
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── analytics.ts
├── assessment-docs/          # University assessment supporting documents
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── astro.config.mjs
└── package.json
```

---

## Configuration

### Before deploying, update these values:

**`astro.config.mjs`**
```js
const SITE_URL = 'https://yourusername.github.io'; // Your GitHub Pages domain
const BASE_PATH = '/start-strong';                  // Your repository name
```

**`src/layouts/BaseLayout.astro`**
```js
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your real GA4 Measurement ID
```

**`public/robots.txt`**
```
Sitemap: https://yourusername.github.io/start-strong/sitemap-index.xml
```

**`src/pages/contact.astro`**
```js
const CONTACT_EMAIL = 'hello@startstrong.run'; // Replace with your real email
```

---

## Deployment to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `start-strong` (must match `BASE_PATH` in astro.config.mjs)
4. Set to **Public**
5. Do not initialise with README — you have one already

### Step 2 — Push the project

```bash
git init
git add .
git commit -m "Initial commit — Start Strong website"
git branch -M main
git remote add origin https://github.com/yourusername/start-strong.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` will run automatically on push

### Step 4 — Verify deployment
- The site will be live at: `https://yourusername.github.io/start-strong/`
- First deployment takes 1–3 minutes
- Check the **Actions** tab for build status

---

## Google Analytics 4 Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for your website
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. In `src/layouts/BaseLayout.astro`, replace `G-XXXXXXXXXX` with your real ID
5. Analytics only loads after a visitor accepts the cookie consent banner

---

## Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your site using the **URL prefix** method: `https://yourusername.github.io/start-strong/`
3. Verify ownership using the **HTML meta tag** method
4. Add the verification token to `BaseLayout.astro` in the commented-out line
5. Submit your sitemap: `https://yourusername.github.io/start-strong/sitemap-index.xml`

---

## Adding New Blog Articles

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Article Title"
description: "A 150-160 character meta description."
pubDate: 2026-11-01
author: "Start Strong Editorial Team"
category: "Beginner Running"
tags: ["tag1", "tag2"]
featured: false
readingTime: 5
---

Your article content in Markdown here.
```

The article automatically appears in the blog listing and generates its own page at `/blog/your-article-title-slug/`.

---

## Assessment Documentation

Supporting documents for the university Digital Marketing Project are in `assessment-docs/`.

---

## Technology Stack

| Component | Technology |
|---|---|
| Framework | Astro 4 |
| Language | HTML, CSS, TypeScript |
| Content | Markdown (Astro Content Collections) |
| Styling | Custom CSS |
| Hosting | GitHub Pages |
| Analytics | Google Analytics 4 |
| Deployment | GitHub Actions |

---

*Start Strong is an independent running information platform. Not affiliated with any sportswear brand.*
