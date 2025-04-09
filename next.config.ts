import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://api.risloo.ir/storage/public/**')],
  },
};

export default nextConfig;
