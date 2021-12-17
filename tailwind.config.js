const colors = require('tailwindcss/colors')
module.exports = {
  //prefix: 'al-',
  content: ["./pages/**/*.{tsx,js}"],
  darkMode: 'class',
  theme: {
    // colors:{
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   blue: colors.blue,
    //   red: colors.red,
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    //   'omlet':"#ff6948",
    // },
    screens: {
      'tablet': '320px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        'omlet':"#ff6948",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
