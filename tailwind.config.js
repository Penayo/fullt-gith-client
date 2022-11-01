/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
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
  safelist: [
    'text-blue-600',
    'dark:text-blue-400',
    'list-disc'
  ]
}
