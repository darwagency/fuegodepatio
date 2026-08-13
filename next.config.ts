import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/media/**", search: "?v=orientation-20260812" },
      { pathname: "/brand/**", search: "" },
      { pathname: "/images/**", search: "" },
    ],
  },
};

export default nextConfig;
