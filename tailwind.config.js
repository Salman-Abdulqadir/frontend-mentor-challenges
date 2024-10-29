/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-start': 'hsl(192, 100%, 67%)',
        'check-end': 'hsl(280, 87%, 65%)',
        // Light theme colors
        light: {
          'very-light-gray': 'hsl(0, 0%, 98%)',
          'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
          'light-grayish-blue': 'hsl(233, 11%, 84%)',
          'dark-grayish-blue': 'hsl(236, 9%, 61%)',
          'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        },
        // Dark theme colors
        dark: {
          'very-dark-blue': 'hsl(235, 21%, 11%)',
          'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
          'light-grayish-blue': 'hsl(234, 39%, 85%)',
          'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          'dark-grayish-blue': 'hsl(234, 11%, 52%)',
          'very-dark-grayish-blue-1': 'hsl(233, 14%, 35%)',
          'very-dark-grayish-blue-2': 'hsl(237, 14%, 26%)',
        }
      },
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      backgroundImage: {
        'check-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "hsl(220, 98%, 61%)",
          "primary-content": "hsl(0, 0%, 98%)",
          "secondary": "hsl(280, 87%, 65%)",
          "accent": "hsl(192, 100%, 67%)",
          "neutral": "hsl(235, 19%, 35%)",
          "base-100": "hsl(0, 0%, 98%)",
          "base-200": "hsl(236, 33%, 92%)",
          "base-300": "hsl(233, 11%, 84%)",
          "base-content": "hsl(235, 19%, 35%)",
        },
        dark: {
          "primary": "hsl(220, 98%, 61%)",
          "primary-content": "hsl(0, 0%, 98%)",
          "secondary": "hsl(280, 87%, 65%)",
          "accent": "hsl(192, 100%, 67%)",
          "neutral": "hsl(234, 11%, 52%)",
          "base-100": "hsl(235, 21%, 11%)",
          "base-200": "hsl(235, 24%, 19%)",
          "base-300": "hsl(233, 14%, 35%)",
          "base-content": "hsl(234, 39%, 85%)",
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
}
