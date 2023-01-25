/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/layouts/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        humbleGray: {
          100: '#E8E9EB',
          200: '#F3F6FB'
        },
        humbleBlack: {
          100: '#1E2534'
        }
      },
    },
  },
  plugins: []
}
