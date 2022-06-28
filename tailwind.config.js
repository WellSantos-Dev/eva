/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '65.5rem',
        'productRow': '1044px',
        'proudctRowSm': '786px'
      },
      width: {
        '128': '32rem',
        '236': '14.75rem',
        'product': '236px',
        'input': '28.125rem',
        '230': '230px',
        '228': '228px',
        'container': '65.5rem',
      },
      height: {
        '374': '23.375rem',
        '452': '28.25rem'
      },
      margin: {
        '26': '26px'
      },
      padding: {
        'img': '18px'
      },
      colors: {
        'primary-dark': '#BA066B',
        'primary': '#E11383',
        'primary-light': '#FF3BA5',

        'secondary-dark': '#6526BF',
        'secondary': '#8C3BFF',
        'secondary-light': '#A566FF',

        'black-custom': '#0C0D0D',
        'black-900': '#252627',
        'black-800': '#3C3E40',

        'white-custom': '#FDFDFD',
        'white-900': '#F7FAFF',
        'white-800': '#DADFEB',
      },
      boxShadow: {
        'right': '13px 0 #fff, -1em 0 0.4em #fff;',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
