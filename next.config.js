/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true,
  },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
}
