/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#F59E0B',   /* yellow accent — replaces green everywhere */
          blue: '#3B82F6',
          pink: '#EC4899',
          cyan: '#06B6D4',
        },
        dark: {
          900: '#ffffff',
          800: '#f9fafb',
          700: '#f3f4f6',
          600: '#e5e7eb',
          500: '#d1d5db',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        glow: {
          from: { boxShadow: '0 0 10px #F59E0B, 0 0 20px #F59E0B' },
          to: { boxShadow: '0 0 20px #F59E0B, 0 0 40px #F59E0B, 0 0 60px #F59E0B' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
