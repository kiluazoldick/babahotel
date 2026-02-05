// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.app.goo.gl",
      },
    ],
  },
};

module.exports = nextConfig;
