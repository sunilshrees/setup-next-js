/** @type {import('next').NextConfig} */

const { NEXT_PUBLIC_IMAGE_DOMAINS } = process.env;

const remotePatterns = (NEXT_PUBLIC_IMAGE_DOMAINS || "")
  ?.split(",")
  ?.map((domain) => ({
    protocol: "https",
    hostname: domain.trim(),
    pathname: "**",
  }));

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    remotePatterns,
  },
};

export default nextConfig;
