import '@unocss/reset/tailwind.css'
import './styles/main.css'

import type { App } from 'vue'

// eslint-disable-next-line import/no-unresolved
import 'uno.css'

import { install as i18nInstall } from './modules/i18n'
import { install as piniaInstall } from './modules/pinia'

export default function setup(app: App<Element>) {
  i18nInstall(app)
  piniaInstall(app)
}
