---
title: GoCartoonMe
subtitle: Hand-drawn portrait service — rebuilt from over-engineered to intentionally simple.
description: Product website for my hand-drawn cartoon portrait service — running for 10+ years, built to convert visitors into orders with no backend to maintain.
metaDescription: Product website for my cartoon portrait service. Rebuilt from a Next.js + AWS stack to a lean Astro site. Orders via Gumroad, deployed on Cloudflare Pages.
techStack: ["Astro", "Tailwind CSS", "Formspree", "Gumroad", "Cloudflare Pages"]
iconSrc: /gocartoonme-icon.svg
liveUrl: https://gocartoonme.com
featured: true
order: 1
---

GoCartoonMe is a hand-drawn portrait service I've been running for over 10 years — starting in WordPress, evolving into a full Next.js + AWS stack, and now deliberately simplified down to a lean static site.

Every portrait is drawn by hand. No AI, no filters. Just craft.

## The evolution

The site went through three phases:

1. **WordPress** — got the job done, but slow and hard to maintain
2. **Next.js + AWS** — user accounts, Cognito auth, DynamoDB, Lambda functions, a full order management backend. It worked, but the complexity was never justified for a solo-run creative service
3. **Astro + third-party services** — the current version. Everything that didn't need to exist was cut

## How it's built now

- **Astro** for a fully static build — no unnecessary JS
- **Tailwind CSS** for styling
- **Gumroad** for order processing — no custom checkout, no payment infrastructure to own
- **Formspree** for the contact form — no server required
- **Cloudflare Pages** for deployment — global CDN, zero ops, zero cost

The previous AWS setup had its place while the product was evolving. Stripping it back wasn't cutting corners — it was recognising that Cognito, Lambda, and DynamoDB were solving problems this site no longer had.

Sometimes the most deliberate engineering decision is knowing what to remove.
