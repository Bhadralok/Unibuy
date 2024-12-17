/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#DB4444",
        brandLightRed: "#E7A2A2",
        brandGrey: "#828282"
      }
    },
  },
  extend: {
    fontFamily: {
      sans: "Manrope, serif",
    },
  },
  plugins: [],
};
