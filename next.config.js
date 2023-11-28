/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://onar.dev;"
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://onar.dev'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
