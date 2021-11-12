module.exports = {
  purge: [
    './html/**/*.html',
    './scripts/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors: {
      'gs-red':'#f23e36',
      'upgrad-red':'#EE2C3C',
      'upgrad-blue': '#1c1c3b',
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
