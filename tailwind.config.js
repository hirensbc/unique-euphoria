/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        playfair: ["Playfair Display", "serif"],
        mariposa: ["Mariposa Sans Std", "sans-serif"],
      },

    },
  },

  plugins: [],
};