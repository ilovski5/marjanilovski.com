---
title: Winglex
subtitle: Flight compensation platform built for compliance and scale.
description: A flight compensation platform handling passenger claims end-to-end. Built for compliance — secure document handling, automated PDF generation, and AWS infrastructure designed for PII.
metaDescription: Secure flight compensation platform built with Next.js and AWS serverless architecture. Features automated PDF generation and compliant PII handling.
techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "PostgreSQL"]
iconSrc: /winglex-icon.svg
liveUrl: https://winglex.com
featured: true
order: 2
---

Winglex is a flight compensation platform that handles passenger claims end-to-end — from submission to resolution, with full control over data, compliance, and infrastructure.

## The challenge

We handle sensitive PII — passport scans, boarding passes, personal details. That meant compliance couldn't be an afterthought. Every architectural decision was made with security and data handling in mind.

## How it's built

- **Next.js** frontend with Shadcn UI and Tailwind CSS
- **React Hook Form + Zod** for validated multi-step claim forms
- **@react-pdf/renderer** for generating legal PDF documents sent via email
- **react-email** for transactional email templates
- **AWS Lambda + API Gateway** for serverless APIs
- **RDS PostgreSQL** for structured claim data
- **S3** for secure document storage (passports, boarding passes)

The AWS-first approach wasn't over-engineering — it was the right call for a platform dealing with regulated data at scale.
