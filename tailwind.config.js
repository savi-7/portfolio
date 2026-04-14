/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0A0A0A',
        card: '#111111',
        primary: '#7C6AF7',
        secondary: '#06D6A0',
        coral: '#FF6B6B',
        textPrimary: '#FFFFFF',
        textMuted: '#888888',
      },
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'noise': 'noise 1s steps(2) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        noise: {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
          '100%': { transform: 'translate(5%, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'volumetric-blob': 'radial-gradient(circle at center, rgba(124,106,247,0.15) 0%, rgba(5,5,5,1) 60%)',
      }
    },
  },
  plugins: [],
}
