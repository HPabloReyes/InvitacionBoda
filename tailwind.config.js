/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
        mooli: ["Mooli", "sans-serif"],
        pacifico: ["pacifico", "cursive"],
      },
      fontWeight: {
        400: "400",
        700: "700",
      },
      colors: {
        gold: { 500: "#d4af37" },
      },
    },
  },
  plugins: [],
};
