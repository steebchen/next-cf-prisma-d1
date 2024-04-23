import { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ui: ['var(--font-inter)'],
        theme: ['var(--font-comfortaa)'],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [
    animate,
  ],
} as Config
