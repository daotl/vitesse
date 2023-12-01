import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'

// import 'element-plus/dist/index.css'
import type { App } from 'vue'

import type { UserModule } from './types'

export default function setup(app: App<Element>) {
  // install all modules under `modules/`
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(app))
  // ctx.app.use(Previewer)
}
