// /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: './',
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

export default nextConfig;
