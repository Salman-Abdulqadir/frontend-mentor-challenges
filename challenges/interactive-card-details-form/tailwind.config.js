/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "error-red": "hsl(0, 100%, 66%)",
        "greyish-violet": {
          1: "hsl(270, 3%, 87%)",
          2: " hsl(279, 6%, 55%)",
          3: "hsl(278, 68%, 11%)",
        },
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
      },
    },
  },
  plugins: [require("daisyui")],
};
