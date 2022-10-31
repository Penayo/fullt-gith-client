/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
