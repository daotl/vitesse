import type { UserModule } from '~/types'
import { createPinia } from 'pinia'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient) {
    pinia.state.value = (initialState['pinia'] as Record<string, StateTree>) || {}
  }
  else {
    initialState['pinia'] = pinia.state.value
  }
}
