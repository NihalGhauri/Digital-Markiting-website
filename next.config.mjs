const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enables faster builds with SWC
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com", // Added Freepik hostname
      },
          ], // Enables modern formats for better performance
  },
};

export default nextConfig;
