/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
