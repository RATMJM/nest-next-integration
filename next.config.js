/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'wwuokloxidnu676076.cdn.gov-ntruss.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
