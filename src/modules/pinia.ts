import { createPinia, type StateTree } from 'pinia'

import type { UserModule } from '~/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = app => {
  const pinia = createPinia()
  app.use(pinia)
}
