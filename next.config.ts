import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.geoapify.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
