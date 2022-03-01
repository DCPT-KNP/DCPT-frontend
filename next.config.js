/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    clientId: 'efb2040825bd2bb9de28e4d9520be606',
    redirectUrl: 'http://localhost:3000'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};

module.exports = nextConfig;
