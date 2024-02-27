/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu'],
      inter: ['Inter', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}