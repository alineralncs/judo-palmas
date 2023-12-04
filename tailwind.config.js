/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {},
    fontFamily :{ 
      hoe: ["hoe","serif"], 
      italic: ["italic","serif"],
    } 
  },
  plugins: [],
}

