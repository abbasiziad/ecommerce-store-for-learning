import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "i.imgur.com"
    ],
  },
};

export default nextConfig;