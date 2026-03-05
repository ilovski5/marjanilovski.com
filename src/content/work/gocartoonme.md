---
title: GoCartoonMe
subtitle: Hand-drawn portrait service — rebuilt from over-engineered to intentionally simple.
description: Product website for my hand-drawn cartoon portrait service — running for 10+ years, built to convert visitors into orders with no backend to maintain.
metaDescription: Product website for my cartoon portrait service. Rebuilt from a Next.js + AWS stack to a lean Astro site. Orders via Gumroad, deployed on Cloudflare Pages.
techStack:
  ["Astro", "Tailwind CSS", "Formspree", "Gumroad", "Cloudflare Workers"]
iconSrc: /gocartoonme-icon.svg
liveUrl: https://gocartoonme.com
featured: true
order: 1
---

GoCartoonMe is a hand-drawn portrait service I've been running for over 10 years. What started as a WordPress site grew into a surprisingly complex platform — and eventually got stripped back down to something intentionally simple.

Every portrait is drawn by hand. No AI, no filters. Just craft.

## The original stack

At its peak, the platform ran on Next.js with a full AWS backend:

- **Cognito** for user authentication and management
- **DynamoDB** for orders, users, products, and payments
- **Lambda + API Gateway** for REST APIs and webhooks
- **SQS** for async webhook processing — requests returned instantly while processing happened in the background
- **SES** for transactional emails
- **S3 + ImageKit** for secure image delivery — order attachments and cartoon deliveries served fast via CDN from private S3 buckets
- **Pusher** for real-time updates — customers saw live message and delivery notifications without polling
- **2Checkout** for payment processing
- **Contentful** as a headless CMS
- **Serverless Framework** for deployments

It worked. And it was built with intention — the plan was to evolve it into a marketplace where multiple cartoonists could offer their services.

## Why I simplified it

That marketplace never happened. And without it, the architecture was solving problems the business no longer had. Cognito, DynamoDB, Lambda, SQS — all real infrastructure, all real maintenance cost, for a solo creative service that processes a handful of orders a week.

The decision to strip it back wasn't cutting corners. It was recognising that complexity without purpose is just debt.

## How it's built now

- **Astro** — fully static, zero unnecessary JS
- **Tailwind CSS** — styling
- **Gumroad** — order processing, no custom checkout or payment infrastructure to own
- **Formspree** — contact form, no server required
- **Cloudflare Workers** — static site deployment, global CDN, zero ops, zero cost

Sometimes the most deliberate engineering decision is knowing what to remove.
