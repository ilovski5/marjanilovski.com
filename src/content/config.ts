import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    techStack: z.array(z.string()),
    icon: z.string().optional().default("💻"),
    iconSrc: z.string().optional(),
    screenshots: z.array(z.string()).optional().default([]),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(99),
  }),
});

export const collections = { work };
