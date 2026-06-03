import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.venuelook.com' },
      { protocol: 'https', hostname: 'images.venuebookingz.com' },
      { protocol: 'https', hostname: 'content.jdmagicbox.com' },
      { protocol: 'https', hostname: 'imagewedz.oyoroomscdn.com' },
      { protocol: 'https', hostname: 'image.wedmegood.com' }
    ],
  },
};

export default nextConfig;
