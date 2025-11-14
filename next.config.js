/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    webpackBuildWorker: true,
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    // Force single React instance
    config.resolve.alias = {
      ...config.resolve.alias,
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    }
    // Ignore node modules that might have React
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^react$/, require.resolve('react')),
      new webpack.NormalModuleReplacementPlugin(/^react-dom$/, require.resolve('react-dom'))
    )
    return config
  },
}

module.exports = nextConfig
