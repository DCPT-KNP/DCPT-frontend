/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    clientId: 'efb2040825bd2bb9de28e4d9520be606',
    redirectUrl: 'http://localhost:3000',
    javascriptKakaoKey: '754e84ae19a3bd59463c6848efd2e58b'
  },
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          destination: process.env.DESTINATION_URL,
          source: process.env.SOURCE_PATH
        }
      ];
    }
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
