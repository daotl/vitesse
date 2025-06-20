// @ts-check
import { config } from '@daotl/eslint-config'

export default config({
  unocss: true,
  pnpm: true,
}, {
  ignores: ['cypress', '.nx', '**/*.md', 'tsconfig.*'],
}, {
  languageOptions: {
    parserOptions: {
      project: ['tsconfig.eslint.json'],
      extraFileExtensions: ['.vue'],
    },
  },
}, {
  rules: {
    'unicorn/no-abusive-eslint-disable': 'off',
  },
})
