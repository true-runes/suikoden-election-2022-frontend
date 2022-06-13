/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true,
  },
})
