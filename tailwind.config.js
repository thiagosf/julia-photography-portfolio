module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-gray-900': '#191919',
      },
      width: {
        'sidebar': '220px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
