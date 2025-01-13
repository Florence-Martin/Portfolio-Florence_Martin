/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**", // Ajustez le chemin si nécessaire
      },
    ],
  },
};

export default nextConfig;
