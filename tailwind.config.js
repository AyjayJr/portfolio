/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#011423",
        bg: "#fafdff",
        primary: "#80c0f5",
        secondary: "#c9e6fd",
        accent: "#1282de",
        dark_text: "#fafdff",
        dark_bg: "#011423",
        dark_secondary: "#02192c",
        dark_accent: "#93caf6"
      }
    },
  },
  plugins: [],
}

