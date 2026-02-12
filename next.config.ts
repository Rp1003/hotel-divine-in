import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    GOOGLE_PLACE_ID: process.env.GOOGLE_PLACE_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
