const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    siteKey: process.env.SITE_KEY,
    copySecretKey: process.env.COPY_SECRET_KEY,
    resendKey: process.env.RESEND_KEY,
    IPINFO_TOKEN: process.env.IPINFO_TOKEN,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    // Fix for mini-css-extract-plugin error
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "in8cddcab4.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mona.media",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);