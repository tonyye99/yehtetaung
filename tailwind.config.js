/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import { theme } from './lib/theme'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme,
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('dark', '@custom-variant dark')
    }),
  ],
}

export default config
