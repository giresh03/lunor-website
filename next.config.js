/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Force single React instance to prevent conflicts
      config.resolve.alias = {
        ...config.resolve.alias,
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      }
    }
    return config
  },
}

module.exports = nextConfig
