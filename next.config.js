const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.freepik.com",
      "veterinaire-tour-hassan.com",
      "storage.googleapis.com",
      "www.coinpayments.net",
      "coinpayments.net",
      "drive.google.com",
    ],
    minimumCacheTTL: 1500000,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
