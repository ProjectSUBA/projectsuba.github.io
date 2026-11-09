import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',          // Static export for Cloudflare Pages
  trailingSlash: true,
  images: {
    unoptimized: true,       // Required for static export
  },
  turbopack: {
    // Pins the project root explicitly so Next.js doesn't get confused
    // by unrelated lockfiles elsewhere on your machine (e.g. in your
    // Downloads or home folder from other projects).
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
