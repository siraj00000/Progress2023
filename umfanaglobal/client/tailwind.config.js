/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      dark: "#F1620E",
      light: "#FFFFFF",
      black: "#121212",
      "bg-gray-800": "#F1620E"
    },
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
