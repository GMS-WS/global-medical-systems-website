import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6ph3geydhea1n7n6.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
