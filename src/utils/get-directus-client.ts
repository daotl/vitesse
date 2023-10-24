import { authentication, createDirectus, type DirectusClient, rest } from '@directus/sdk'

interface Article {
  id: number
  title: string
  content: string
}

interface Schema {
  articles: Article[]
}

export function getDirectusClient(): DirectusClient<Schema> {
  const client = createDirectus('https://directus.internetapi.c').with(rest()).with(authentication())

  return client
}
