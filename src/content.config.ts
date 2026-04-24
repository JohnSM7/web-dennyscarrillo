import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  cover: z.string().optional(),
  city: z.string().optional(),
  venue: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blogEs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/es' }),
  schema: postSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/en' }),
  schema: postSchema,
});

export const collections = { blogEs, blogEn };
