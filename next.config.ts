import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that the base path matches your GitHub Pages URL structure
  basePath: '/ariapero.github.io',
  assetPrefix: '/ariapero.github.io/',
};

export default nextConfig;
