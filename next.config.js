/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // FIXME: dev 에서 실행시 에러 발생해서 비활성화 하였음
  // async rewrites() {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return [
  //       {
  //         destination: process.env.DESTINATION_URL,
  //         source: process.env.SOURCE_PATH
  //       }
  //     ];
  //   }
  // },
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
