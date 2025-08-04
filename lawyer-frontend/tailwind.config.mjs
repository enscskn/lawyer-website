/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
          dark: '#B8860B',
        },
        secondary: {
          DEFAULT: '#F5F5DC',
          light: '#FFFFFF',
          dark: '#E8E8D0',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          lighter: '#3a3a3a',
          dark: '#000000',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
          dark: '#B8860B',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Roboto', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #D4AF37' },
          '100%': { boxShadow: '0 0 20px #D4AF37, 0 0 30px #D4AF37' },
        },
      },
    },
  },
  plugins: [],
} 