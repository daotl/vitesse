import { createDirectus, type DirectusClient, rest, type RestClient } from '@directus/sdk'
import { ofetch } from 'ofetch'

import type { Article } from '../pages/articles/types'

interface Schema {
  article: Article[]
}

type Client = DirectusClient<Schema> & RestClient<Schema>

let client: Client

export function getDirectusClient(): Client {
  if (!client) {
    client = createDirectus('http://loclhost:8055', {
      globals: { fetch: ofetch },
    }).with(rest())
  }

  return client
}
