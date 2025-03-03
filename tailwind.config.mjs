/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'mint': '#46FFEC',
        'mint-dark': '#3ADBCA',
        'off-black': '#121212',
        'dark-gray': '#1A1A1A',
        'darker-gray': '#0A0A0A',
      },
    },
  },
  plugins: [],
} 