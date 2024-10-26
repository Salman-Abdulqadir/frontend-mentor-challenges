/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        red: {
          100: "hsl(4, 69%, 50%)",
        },
        lime: {
          100: "#FAFAE0",
          300: "#E3EB98",
          500: "hsl(61, 70%, 52%)",
        },
        slate: {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
