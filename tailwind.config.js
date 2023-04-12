module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            rspnd: "#68F0F8"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }