import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, 
        aggregateTimeout: 300, 
        ignored: /node_modules/,
      };
    }
    return config;
  },
  output: "export",
  basePath: "/VXS_web-demo",
  assetPrefix: "/VXS_web-demo/",
};

export default nextConfig;