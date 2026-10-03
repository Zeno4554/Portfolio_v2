import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * - Transpiles three.js/R3F packages (they ship untranspiled ESM in places).
 * - Enables typed routes for safer internal navigation.
 * - Turns on production console stripping to keep the shipped bundle lean.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ["gsap", "lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
