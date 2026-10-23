# 03 — Website Structure and Information Architecture

## Information Architecture Overview

Start Strong uses a flat, clear site hierarchy designed to minimise the number of clicks required to reach any piece of content.

```
Start Strong (/)
├── Start Running (/start-running/)
├── Blog (/blog/)
│   ├── How to Start Running as a Complete Beginner
│   ├── How to Choose the Right Running Shoes
│   ├── Common Running Mistakes Beginners Should Avoid
│   └── How to Stay Motivated and Build a Running Habit
├── Running Gear (/running-gear/)
├── About (/about/)
├── Contact (/contact/)
└── Privacy Policy (/privacy-policy/)
```

## Page Purposes

| Page | Route | Purpose |
|---|---|---|
| Homepage | `/` | Entry point; hero introduction; content discovery |
| Start Running | `/start-running/` | Core beginner education hub; 4-week training plan |
| Blog | `/blog/` | Article listing with category and search filtering |
| Blog Article | `/blog/[slug]/` | Individual article with related content and share tools |
| Running Gear | `/running-gear/` | Equipment education; purchase-decision support |
| About | `/about/` | Mission, values, editorial standards, disclosures |
| Contact | `/contact/` | Enquiry channel; FAQ |
| Privacy Policy | `/privacy-policy/` | Legal; data handling transparency |
| 404 | Not found | User recovery; helpful navigation |

---

## Navigation Design

### Primary Navigation

All pages include a sticky navigation bar containing:
- Start Strong logo (links to homepage)
- Start Running
- Blog
- Running Gear
- About
- Contact
- "Start Running" CTA button (primary action)

### Mobile Navigation

On screens below 768px width, navigation collapses to a hamburger menu. The mobile menu:
- Opens with accessible aria-expanded state management
- Closes on Escape key press
- Closes on outside click
- Prevents body scroll when open

### Footer Navigation

The footer provides secondary navigation across four columns:
- Explore (main site sections)
- Topics (blog categories)
- Information (legal and editorial pages)
- Brand and social links

---

## Content Categories

The blog is organised into four categories aligned with search intent and audience needs:

| Category | Target Intent |
|---|---|
| Beginner Running | "How to start running", "first run", "couch to 5k" |
| Training and Fitness | "Running plan", "intervals", "building mileage" |
| Running Gear | "Best running shoes", "gear for beginners", "what to wear" |
| Motivation and Lifestyle | "Running habits", "running motivation", "running routine" |

---

## SEO URL Structure

All URLs are:
- Lowercase with hyphens
- Descriptive of page content
- Short but meaningful
- Free from unnecessary parameters

Examples:
- `/start-running/`
- `/blog/how-to-start-running-as-a-complete-beginner/`
- `/running-gear/`
- `/privacy-policy/`

---

## Internal Linking Strategy

Internal links are used throughout the site to:
- Guide users from introductory content to deeper detail
- Connect related articles
- Direct users from informational content to action-oriented pages (Start Running, Blog)
- Distribute authority across all pages

Key internal link connections:
- Homepage → Start Running, Blog, Running Gear
- Start Running → Blog articles, Running Gear
- Each article → Start Running, Running Gear, Related articles
- Running Gear → Start Running
- All pages → Blog

---

## User Journey Design

**Primary user journey (new visitor):**
Homepage hero → Start Running guide → Blog articles → Return visits for more content

**Secondary user journey (problem-aware searcher):**
Google search for specific query → Blog article → Related articles → Start Running guide

**Gear-intent journey:**
Google search for gear guidance → Running Gear page → Running shoe article → Start Running guide

---

## Technology Decisions

| Decision | Justification |
|---|---|
| Astro static site generator | Fast, SEO-friendly HTML output; no server required |
| Custom CSS (no framework) | Full control over brand appearance; smaller file size |
| Markdown content collections | Easy article authoring; no duplication; scalable |
| GitHub Pages hosting | Free; reliable; supports custom domains |
| GA4 with consent gating | Compliant analytics measurement; required for assessment |
