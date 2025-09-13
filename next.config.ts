import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  images: {
    domains: ['images.unsplash.com', 'example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
};

export default nextConfig;
