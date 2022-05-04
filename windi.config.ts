import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  darkMode: 'class',
  plugins: [formsPlugin, typography],
  safelist: 'p-1 p-2 p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: { 100: '#096' },
      },
      transitionProperty: { width: 'width' },
    },
  },
})
