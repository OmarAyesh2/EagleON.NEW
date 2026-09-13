# EagleOn Digital Solutions — Website Rebuild

A complete, SEO-first agency website for **EagleOn Digital Solutions** (Amman, Jordan) built with **Next.js 14 App Router + TypeScript + Tailwind CSS**.

---

## Why Next.js App Router (over the current vanilla HTML stack)

| Concern | Current Site (static HTML) | Proposed (Next.js App Router) |
|---------|---------------------------|-------------------------------|
| SEO | Manual meta tags, no sitemap gen | Automatic `metadata` API, built-in sitemap/robots, per-page `<head>` |
| Performance | No image optimization, no code-split | `next/image` (WebP/AVIF auto), route-level code-splitting, streaming SSR |
| Routing | Separate `.html` files | File-system routes, dynamic `[slug]` for services & projects |
| i18n (future) | Duplicate HTML files per language | Middleware-based locale routing ready out of the box |
| Deployment | Manual FTP/hosting | One-click Vercel deploy with preview URLs |
| Structured Data | Hand-typed JSON-LD | Component-based JSON-LD per page, type-safe |

---

## Brand Tokens (from your color palette)

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#7BC1FF` | Primary blue (light) |
| `--secondary` | `#2F5F7A` | Secondary blue (deep) |
| `--tertiary` | `#B8A8FF` | Tertiary lavender |
| `--black` | `#01080F` | Background / near-black |
| `--gray-1` | `#5B5B5B` | Muted text |
| `--gray-2` | `#A0A0A0` | Borders / dividers |
| `--gray-3` | `#DBDBDB` | Light backgrounds |
| `--white` | `#F2FDF8` | Off-white / text on dark |

---

## Site Map & Route Architecture

```
/                          → Home
/about                     → About Us
/services                  → Services (overview grid)
/services/[slug]           → Service detail (5 pages)
    web-development
    branding
    social-media-management
    production
    3d-modeling-cgi
/portfolio                 → Our Work (filterable grid gallery)
/portfolio/[slug]          → Project case study detail
/contact                   → Contact Us (form + map)
/qa                        → Q&A (accordion FAQ)
```

---

## Page-by-Page Breakdown

### 1. Home Page (`/`)

**Sections (top to bottom):**

1. **Hero** — Full-viewport, dark background with subtle grid/noise overlay (matching current site aesthetic). Centered headline "WE ENGINEER DIGITAL SUPREMACY", subtext, CTA button "Let's Build →". Animated dot eyebrow badge ("System Optimized").
2. **Partners Marquee** — Infinite-scroll logo ticker ("Trusted by Industry Visionaries").
3. **Services Preview** — 3-column card grid linking to `/services/[slug]`. Show all 5 services.
4. **Anti-Template Comparison** — 2-column "Template Trap vs EagleOn Custom Build" comparison cards.
5. **Why Choose EagleOn** — 4 numbered value-prop cards.
6. **Portfolio Preview** — 3 featured project cards linking to `/portfolio/[slug]`.
7. **CTA Band** — "Request a Free Quote" with dual buttons.

**SEO:**
- `<title>`: "EagleOn Digital | Web Development, Branding & CGI in Amman, Jordan"
- JSON-LD: `ProfessionalService` schema (keep existing structured data)
- `<meta description>`: Unique, keyword-rich description

---

### 2. About Us (`/about`)

**Sections:**
1. **Hero Banner** — "About EagleOn Digital" with brand mission statement
2. **Story / Timeline** — Company origin, growth milestones
3. **Team Section** — Team members grid (photo, name, role)
4. **Values Grid** — 3-4 core value cards
5. **CTA Band** — Link to contact

**SEO:**
- `<title>`: "About Us | EagleOn Digital Solutions — Amman, Jordan"
- JSON-LD: `Organization` schema

---

### 3. Services Overview (`/services`)

**Sections:**
1. **Hero Banner** — "Our Services" with overview paragraph
2. **Services Grid** — 5 service cards (icon, title, excerpt, "Learn More →")
3. **Process Section** — Numbered steps showing your workflow (Discovery → Strategy → Design → Develop → Launch)
4. **CTA Band**

**SEO:**
- `<title>`: "Digital Services | Web Development, Branding, CGI & More | EagleOn"
- JSON-LD: `Service` entries

---

### 4. Service Detail (`/services/[slug]`)

5 individual pages, each with:

1. **Hero** — Service name + tagline
2. **Overview** — What the service includes, key benefits
3. **Features/Deliverables Grid** — What the client gets
4. **Process Steps** — Service-specific workflow
5. **Related Portfolio** — 2-3 projects from this service category
6. **CTA** — "Start Your [Service] Project"

| Slug | Title | Target Keywords |
|------|-------|-----------------|
| `web-development` | Website Development | website development Amman, custom web development Jordan |
| `branding` | Branding & Identity | branding agency Amman, brand identity Jordan |
| `social-media-management` | Social Media Management | social media management Jordan, SMM agency Amman |
| `production` | Production | video production Amman, content production Jordan |
| `3d-modeling-cgi` | 3D Modeling & CGI | 3D modeling Amman, CGI production Jordan, VFX |

---

### 5. Portfolio / Our Work (`/portfolio`)

**Sections:**
1. **Hero Banner** — "Our Work"
2. **Filter Bar** — Category tabs: All | Web | Branding | Social Media | Production | CGI
3. **Masonry/Grid Gallery** — Project cards with thumbnail, title, category tag. Click opens `/portfolio/[slug]`

**SEO:**
- `<title>`: "Our Work & Portfolio | EagleOn Digital Solutions"

---

### 6. Project Case Study (`/portfolio/[slug]`)

**Sections:**
1. **Hero Image** — Full-width project hero
2. **Project Meta** — Client name, service type, year, link to live project
3. **Challenge** — What problem the client faced
4. **Solution** — What EagleOn built
5. **Results** — Metrics / outcomes (if available)
6. **Image Gallery** — Carousel/grid of project screenshots
7. **Next Project** — Link to next case study
8. **CTA Band**

---

### 7. Contact Us (`/contact`)

**Sections:**
1. **Hero Banner** — "Let's Build Together"
2. **Contact Form** — Name, Email, Phone, Service Interest (dropdown), Budget Range, Message
3. **Contact Info Cards** — Email, Phone, Address, Working Hours
4. **Embedded Map** — Google Maps embed for Amman office
5. **Social Links**

**SEO:**
- `<title>`: "Contact Us | EagleOn Digital Solutions — Amman, Jordan"
- JSON-LD: `LocalBusiness` with `ContactPoint`

---

### 8. Q&A / FAQ (`/qa`)

**Sections:**
1. **Hero Banner** — "Frequently Asked Questions"
2. **Accordion Groups** — Categorized: General, Services, Pricing, Process
3. **CTA Band** — "Still have questions? Contact us"

**SEO:**
- `<title>`: "FAQ | Common Questions About EagleOn Digital Services"
- JSON-LD: `FAQPage` schema (critical for rich snippets in Google)

---

## Project File Structure

```
EagleON.NEW/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── favicon.png
│   │   ├── og-image.png
│   │   ├── hero/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── team/
│   │   └── logos/              ← Partner logos
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (nav + footer + fonts + global CSS)
│   │   ├── page.tsx            ← Home
│   │   ├── globals.css         ← Tailwind directives + CSS custom properties
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx        ← Services overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx    ← Dynamic service detail
│   │   ├── portfolio/
│   │   │   ├── page.tsx        ← Grid gallery
│   │   │   └── [slug]/
│   │   │       └── page.tsx    ← Case study detail
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── qa/
│   │   │   └── page.tsx
│   │   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   │   └── robots.ts           ← robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── Badge.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── PartnersMarquee.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── PortfolioPreview.tsx
│   │   │   ├── CTABand.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── FAQAccordion.tsx
│   │   └── seo/
│   │       └── JsonLd.tsx      ← Reusable JSON-LD component
│   ├── data/
│   │   ├── services.ts         ← Service definitions (slug, title, description, icon, features)
│   │   ├── portfolio.ts        ← Project definitions (slug, title, category, images, case study content)
│   │   ├── faq.ts              ← FAQ items grouped by category
│   │   ├── team.ts             ← Team member data
│   │   └── navigation.ts       ← Nav links
│   ├── lib/
│   │   └── utils.ts            ← cn() helper, etc.
│   └── types/
│       └── index.ts            ← TypeScript interfaces
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## SEO Strategy Summary

| Technique | Implementation |
|-----------|---------------|
| **Server-Side Rendering** | All pages SSR by default (App Router) — full HTML to crawlers |
| **Per-page metadata** | `export const metadata` on every `page.tsx` with unique title/description |
| **JSON-LD Structured Data** | `ProfessionalService`, `FAQPage`, `Service`, `BreadcrumbList` |
| **Sitemap** | `src/app/sitemap.ts` → auto-generates `/sitemap.xml` |
| **Robots** | `src/app/robots.ts` → `/robots.txt` |
| **Canonical URLs** | Set via `metadata.alternates.canonical` |
| **Open Graph / Twitter Cards** | Per-page OG image, title, description |
| **Image Optimization** | `next/image` with WebP/AVIF, lazy loading, priority on hero |
| **Semantic HTML** | `<main>`, `<nav>`, `<section>`, `<article>`, heading hierarchy |
| **Core Web Vitals** | Font preloading, no layout shift, minimal JS bundle |
| **Internal Linking** | Service → Portfolio cross-links, breadcrumbs, related content |
| **hreflang** | Ready for EN/AR expansion later |

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 14** (App Router, RSC) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 3** |
| Animations | **Framer Motion** (reveal-on-scroll, page transitions) |
| Icons | **Lucide React** |
| Forms | **React Hook Form + Zod** validation |
| Email (contact form) | **Resend** or **EmailJS** (serverless) |
| Deployment | **Vercel** (recommended) or any Node hosting |
| Analytics | **Google Analytics 4** + **Google Search Console** |

---

## Open Questions

> [!IMPORTANT]
> Please clarify the following before we start building:

1. **Language support** — The current site has EN/AR toggle. Do you want bilingual (English + Arabic) support in the new site from day one, or English-only for now with Arabic added later?

2. **Content** — You have an `EagleOn_Digital_Website_Content.xlsx` in the repo. Does that contain the final copy for all pages, or do you want me to generate placeholder content first and you'll swap it later?

3. **Portfolio data** — How many projects should appear on the portfolio page? Should I seed the data files with the 3 projects from the current site (LeCiel Fragrance, RedEye, Lorenzo) plus placeholders?

4. **Contact form backend** — Do you have a preferred email service (Resend, EmailJS, custom SMTP)? Or should the form just collect data client-side for now?

5. **Hosting/Domain** — Are you staying on Vercel, or do you have specific hosting requirements?

6. **Dark mode** — The current site is dark-themed. Should the new site be dark-only, or should we include a light/dark toggle?

7. **Animations** — The current site uses subtle reveal animations and noise overlays. Should we keep this aesthetic or go for a different feel?

8. **Pricing page** — The current site has a `/pricing` page but you didn't list it in your requirements. Should we drop it or keep it?

---

## Build Phases (Proposed Execution Order)

| Phase | What | Pages/Components |
|-------|------|-----------------|
| **Phase 1** | Project scaffolding + global layout | Next.js setup, Tailwind config, Navbar, Footer, brand tokens, fonts |
| **Phase 2** | Home page | Hero, Partners Marquee, Services Preview, Comparison, Why Us, Portfolio Preview, CTA |
| **Phase 3** | Services | Overview grid + 5 individual service detail pages |
| **Phase 4** | Portfolio | Grid gallery + dynamic case study pages |
| **Phase 5** | About Us | Story, team, values |
| **Phase 6** | Contact Us | Form, map, contact info |
| **Phase 7** | Q&A | FAQ accordion with JSON-LD |
| **Phase 8** | SEO hardening | Sitemap, robots, JSON-LD audit, OG images, performance tuning |

---

## Verification Plan

### Automated
- `npm run build` — zero errors, zero warnings
- `npm run lint` — ESLint clean
- Lighthouse audit: target 90+ on all 4 categories (Performance, Accessibility, Best Practices, SEO)

### Manual
- Visual review of every page on desktop, tablet, and mobile viewports
- Test all navigation links and dynamic routes
- Verify JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)
- Submit sitemap to Google Search Console
