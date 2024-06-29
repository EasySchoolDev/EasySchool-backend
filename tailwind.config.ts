/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  css: ["/public/css/main.css"],
  theme: {
    extend: {
      colors: {
        'black': '#0f172a',
      }
    }
  },
  plugins: [],
  darkMode: 'selector',
}





