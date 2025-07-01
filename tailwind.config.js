/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'emerald-custom': {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cc',
          300: '#8dd1a8',
          400: '#57b67d',
          500: '#339b5b',
          600: '#2D5016', // Primary emerald green
          700: '#1f5a3a',
          800: '#1c4a31',
          900: '#183d29',
        },
        'neutral-bg': '#fefefe', // Light neutral background
        'neutral-section': '#fafafa', // Slightly darker for alternating sections
      },
    },
  },
  plugins: [],
};