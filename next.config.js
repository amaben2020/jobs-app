/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },

  webpack: (config) => {
    config.experiments = {
      layers: true,

      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
