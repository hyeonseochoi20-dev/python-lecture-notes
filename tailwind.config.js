/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#e6eaff',
          200: '#c2cbff',
          300: '#8ea1ff',
          400: '#5a67ff',
          500: '#262dff',
          600: '#1e25cc',
          700: '#171c99',
          800: '#0f1366',
          900: '#080ae3',
        },
        dark: {
          100: '#36393f',
          200: '#2f3238',
          300: '#25272b',
          400: '#1a1b1f',
          500: '#0d0f13',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}