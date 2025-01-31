/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build', // Change output directory to 'build'
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
