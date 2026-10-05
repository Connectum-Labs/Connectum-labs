/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // AImpact Agency retired Oct 2026; send old links to the ventures list
      { source: '/ventures/aimpact-agency', destination: '/ventures', permanent: true },
      { source: '/agencyops', destination: '/ventures/agencyops', permanent: false },
    ]
  },
}

module.exports = nextConfig
