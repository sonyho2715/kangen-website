/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kangen: {
          blue: '#0066CC',
          darkblue: '#003D99',
          light: '#E8F4FF',
          accent: '#00D4FF',
        },
      },
    },
  },
  plugins: [],
};
