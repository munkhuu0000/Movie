import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**", // Энэ нь бүх дэд хавтасны зургийг зөвшөөрнө
      },
    ],
  },
};

export default nextConfig;
