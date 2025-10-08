/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Windows XP Color Palette
        xp: {
          blue: {
            50: '#e6f3ff',
            100: '#b3d9ff',
            200: '#80bfff',
            300: '#4da6ff',
            400: '#1a8cff',
            500: '#0073e6', // Primary XP Blue
            600: '#005cb3',
            700: '#004080',
            800: '#002a4d',
            900: '#00141a',
          },
          gray: {
            50: '#f8f8f8',
            100: '#ece9d8', // Classic XP Window Background
            200: '#d4d0c8', // XP Button Color
            300: '#c0bdb6',
            400: '#a8a49c',
            500: '#8b8680',
            600: '#6b6760',
            700: '#4a4740',
            800: '#2a2720',
            900: '#0a0700',
          },
          green: {
            400: '#39d353', // XP Start Button Green
            500: '#2db843',
          }
        }
      },
      fontFamily: {
        'xp': ['Tahoma', 'MS Sans Serif', 'sans-serif'],
        'pixel': ['MS Sans Serif', 'monospace'],
      },
      boxShadow: {
        'xp-inset': 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #808080',
        'xp-outset': '1px 1px 0px #808080, -1px -1px 0px #ffffff',
        'xp-window': '2px 2px 8px rgba(0, 0, 0, 0.3)',
        'xp-raised': 'inset 1px 1px 0px #ffffff, inset 2px 2px 0px #dfdfdf, inset -1px -1px 0px #808080, inset -2px -2px 0px #404040',
        'xp-pressed': 'inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808080',
      },
      animation: {
        'xp-fade-in': 'xpFadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'xp-scale-in': 'xpScaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'xp-slide-up': 'xpSlideUp 0.2s ease-out',
        'crt-flicker': 'crtFlicker 0.15s infinite linear alternate',
      },
      keyframes: {
        xpFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        xpScaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        xpSlideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        crtFlicker: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.98' },
        },
      },
    },
  },
  plugins: [],
}