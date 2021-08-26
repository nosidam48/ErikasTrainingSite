const withPWA = require('next-pwa')
// const securityHeaders = [{
//   key: 'Content-Security-Policy',
//   value: "default-src 'self'"
// }]
module.exports = withPWA({
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ]
  // },
  pwa: {
    dest: 'public'
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
})