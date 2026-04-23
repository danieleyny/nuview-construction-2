# NuView Constructions

Flagship marketing site for NuView Constructions — Philadelphia general contractor.
Built with Next.js 15 (App Router), TypeScript strict, Tailwind v4, Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll, React Hook Form + Zod, Resend.

## Stack

- **Framework** — Next.js 15 App Router, React 19, TypeScript strict
- **Styling** — Tailwind CSS v4 (CSS variables in `globals.css`)
- **Motion** — Framer Motion (micro + layout), GSAP ScrollTrigger (pinned scroll), Lenis (smooth scroll)
- **Fonts** — Fraunces (display), Geist (sans), Geist Mono (mono) via `next/font`
- **Forms** — React Hook Form + Zod validation, Resend for email
- **Imagery** — Unsplash via `next/image` with AVIF/WebP
- **Hosting** — Vercel

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

`npm run build` runs `next build` and then `next-sitemap` post-build to generate `sitemap.xml` + `robots.txt`.

## Environment

Copy `.env.example` to `.env.local`:

```
RESEND_API_KEY=re_xxx
CONTACT_EMAIL_TO=info@nuviewconstructions.com
CONTACT_EMAIL_FROM=hello@nuviewconstructions.com
NEXT_PUBLIC_SITE_URL=https://nuview2.vercel.app
```

Forms fall back to logging when `RESEND_API_KEY` is absent so local preview still succeeds.

## Architecture

```
src/
  app/                      App Router pages + API routes
    api/contact/route.ts    Contact form endpoint
    api/quote/route.ts      Service-specific quote form endpoint
    opengraph-image.tsx     Dynamic OG image (edge runtime)
    work/, services/, service-areas/  — dynamic segments (SSG)
  components/
    chrome/                 Nav, Footer, FloatingCta, PageTransition
    primitives/             Container, Section, Eyebrow, Button, RevealText,
                            RevealImage, Marquee, Cursor, SmoothScroll
    home/                   Home page sections
    work/                   BeforeAfter
    forms/                  ContactForm, QuoteForm
    seo/                    JsonLd
  content/                  Typed content files (site, services, projects,
                            testimonials, neighborhoods, process, faqs)
  lib/                      cn, contact-schema, email, rate-limit
```

Content lives in typed `.ts` files. Lift to a CMS later — the interfaces are the only thing that will change.

## Routes

- `/` — Home
- `/work`, `/work/[slug]`
- `/services`, `/services/[slug]`
- `/about`, `/approach`, `/testimonials`
- `/service-areas`, `/service-areas/[slug]`
- `/faq`, `/financing`, `/referral`, `/privacy`
- `/contact`
- `/api/contact`, `/api/quote`

## Deploy

Linked to Vercel. `vercel --prod` to ship.
