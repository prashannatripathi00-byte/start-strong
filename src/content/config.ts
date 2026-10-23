import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Start Strong Editorial Team'),
    category: z.enum(['Beginner Running', 'Training and Fitness', 'Running Gear', 'Motivation and Lifestyle']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(), // minutes
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
