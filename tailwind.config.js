/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        btn: '50px',
      },
      screens: {
        ...defaultTheme.screens,
        'xs': '475px',
        // lg:'1030px',
        "xl":'1140px'
      },
      colors:{
        primary: "#C98D4E",
        textBlack: "#000",
        bgDark:"#020205",
        transparent:"#00000000"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },

      fontFamily: {
        sans:['Arial','sans-serif']
      },
      lineHeight:{
        btn: '50px',
      },

      fontSize: {
        's18':'18px',
        's22':'22px',
        's64':'64px',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
