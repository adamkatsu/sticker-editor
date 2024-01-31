/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js,liquid}'],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'main-background': "url('/img/background.svg')"
    }
  },
  plugins: [],
}

