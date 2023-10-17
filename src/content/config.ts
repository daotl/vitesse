import { defineCollection, z } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = {
  articles: articlesCollection,
}
