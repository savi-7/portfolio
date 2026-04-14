/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#12121A',
        card: '#1A1A2E',
        primary: '#7C6AF7',
        secondary: '#06D6A0',
        coral: '#FF6B6B',
        textPrimary: '#F0EFFF',
        textMuted: '#7B7A95',
      },
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(124, 106, 247, 0.4)',
        'glow-secondary': '0 0 20px rgba(6, 214, 160, 0.4)',
        'glow-coral': '0 0 20px rgba(255, 107, 107, 0.4)',
      }
    },
  },
  plugins: [],
}
