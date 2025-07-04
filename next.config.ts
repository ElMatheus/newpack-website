import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newpack-images.s3.us-east-2.amazonaws.com',
        pathname: '**',
      },
    ],
  }
};

export default nextConfig;