/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBlack: '#01080E',
        primaryLight: '#011627',
        primaryDark: '#011221',
        secondaryWhite: '#E5E9F0',
        secondaryGray: '#607B96',
        secondaryBlue: '#4D5BCE',
        secondaryGreen: '#3C9D93',
        accentOrange: '#FEA55F',
        accentGreen: '#43D9AD',
        accentRed: '#E99287',
        accentViolet: '#C98BDF',
        accentBlue: '#4D5BCE',
        line: '#1E2D3D'
      },
      fontFamily: {
        prostoOne: ["Prosto One", "sans-serif"],
        russoOne: ["Russo One"],
      },
      height: {
        fullWith20m: 'calc(100svh - 20px)',
        fullWith125m: 'calc(100svh - 125px)',
        fullWith165m: 'calc(100svh - 155px)'
      },
      width: {
        fullWith20: 'calc(100% - 20px)',
        fullWith40: 'calc(100% - 40px)'
      },
      animation:{
        'translate': 'translate 0.25s linear 0s 1'
      },
      keyframes:{
        translate:{
          '0%':{ transform:'translate(-100%,0)'},
          '100%':{transform:'translate(0,0)'}
        }
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "930px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

