const darkBlue = "#363A6C"
const lightGreen = "#36BDCC"
const white = "#fff"

const colors = {
  darkBlue,
  lightGreen,
  white,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "home-section": "url('/images/home-bg.svg')",
      },
      typography: {
        DEFAULT: {
          css: {
            h2: "m-0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
