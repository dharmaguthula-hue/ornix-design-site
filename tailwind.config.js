/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ornix: {
          black: '#000000',
          graphite: '#1A1A1A',
          chrome: '#E5E5E5',
          blue: '#0066FF', // Electric Blue as per blueprint
        }
      },
      fontFamily: {
        futuristic: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'mechanical-reveal': 'mechanical 1s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
      keyframes: {
        mechanical: {
          '0%': { transform: 'scale(0.8) rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
