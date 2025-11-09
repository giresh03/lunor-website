import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00D4FF',
        'neon-purple': '#9D4EDD',
        'neon-cyan': '#00FFF5',
        'dark-bg': '#0A0A0F',
        'dark-surface': '#121218',
      },
    },
  },
  plugins: [],
}
export default config
