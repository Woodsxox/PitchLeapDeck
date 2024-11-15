/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with trusted hostnames
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
         {
        protocol: 'https',
        hostname: 'placehold.co',   // Added placehold.co to the allowed list
      },
    ],
  },
  experimental: {
    after:true
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
