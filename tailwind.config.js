module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'zen-old-mincho': ['Zen Old Mincho'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {},
}
