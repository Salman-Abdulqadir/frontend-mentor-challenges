/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        "blue-1": "hsl(210, 60%, 98%)",
        "blue-2": "hsl(211, 68%, 94%)",
        "blue-3": "hsl(205, 33%, 90%)",
        "blue-4": "hsl(219, 14%, 63%)",
        "blue-5": "hsl(219, 12%, 42%)",
        "blue-6": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
