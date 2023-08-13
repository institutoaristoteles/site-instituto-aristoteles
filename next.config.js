/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "*.amazonaws.com/**/**",
        protocol: "https",
        port: "",
      },
      {
        hostname: "*.notion.so/**/**",
        protocol: "https",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
