import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures the build goes into the 'out' folder
  distDir: 'out',
};

export default nextConfig;