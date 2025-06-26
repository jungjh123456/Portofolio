/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig; 