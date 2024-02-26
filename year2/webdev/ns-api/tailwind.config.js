/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        fg: "#f9ecde",
        bg: "#0b0702",
        primary: "#ffc917",
        secondary: "#0063d3",
      },
    },
  },
  plugins: [],
};
