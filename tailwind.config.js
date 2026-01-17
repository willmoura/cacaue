/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F1EA", // Papiro
        foreground: "#333333", // Chumbo
        primary: {
          DEFAULT: "#2D1B14", // Marrom Cacauê
          foreground: "#B8860B", // Ouro Solar (Text on dark)
        },
        secondary: {
          DEFAULT: "#1B3022", // Verde Floresta
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#B8860B", // Ouro Solar
          foreground: "#2D1B14",
        },
        muted: "#E5E0D8", // Slightly darker Papiro for borders
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1400px",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
}