/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '*.html',
    '*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        anna: ['Raleway']
      }
    },
  },
  plugins: [],
}

