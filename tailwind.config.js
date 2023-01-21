/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      raleWay: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryDarkBlue: 'hsl(243, 87%, 12%)',
        primaryDesaturatedBlue: 'hsl(238, 22%, 44%)',
        accentBrightBlue: 'hsl(224, 93%, 58%)',
        accentModerateCyan: 'hsl(170, 45%, 43%)',
        lightGrayishBlue: 'hsl(240, 75%, 98%)',
        lightGray: 'hsl(0, 0%, 75%)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
        '4xl': '1536px',
      }
    },
  },
  plugins: [],
};
