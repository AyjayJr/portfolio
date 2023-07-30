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
        text: "#000000",
        bg: "#ffffff",
        primary: "#8fb3ff",
        secondary: "#ebf1ff",
        accent: "#d41d6d",
        dark_text: "#ffffff",
        dark_bg: "#000000",
        dark_primary: "8fb3ff",
        dark_secondary: "#001952",
        dark_accent: "#f199bf"
      },
      backgroundImage: {
        'hero-img': "url('/assets/me.jpeg')",
      }
    },
  },
  plugins: [],
}

