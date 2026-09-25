import { defineCollection, z } from 'astro:content';

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  description: z.string().optional(),
  draft: z.boolean().default(false),
});

const notes = defineCollection({
  type: 'content',
  schema: entrySchema,
});

const essays = defineCollection({
  type: 'content',
  schema: entrySchema,
});

const poems = defineCollection({
  type: 'content',
  schema: entrySchema,
});

export const collections = { notes, essays, poems };
