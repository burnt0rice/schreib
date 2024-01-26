/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    base: true,
    styled: true,
  },
}

