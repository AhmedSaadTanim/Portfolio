/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },

  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
