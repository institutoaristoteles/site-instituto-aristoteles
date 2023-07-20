/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#2B313D",
      "dark-blue": "#363A6C",
      blue: "#3672cc",
      "light-green": "#36BDCC",
      white: "#fff",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: 0,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
