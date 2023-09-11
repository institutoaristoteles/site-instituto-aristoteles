const colors = {
  "dark-blue": "#363A6C",
  "light-green": "#36BDCC",
  green: "limegreen",
  white: "#fff",
  red: "red",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: 0,
      },
    },
    extend: {
      backgroundImage: {
        "home-section": "url('/home-bg.svg')",
      },
      spacing: {
        "content-gap": "1.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
