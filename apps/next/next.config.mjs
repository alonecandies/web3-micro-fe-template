// import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules?.push({
      test: /deprecated-pages\/.*/,
      loader: 'ignore-loader',
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, must-revalidate',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  amp: {
    canonicalBase: 'https://xxx.com',
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
};

export default nextConfig;

// export default withBundleAnalyzer({ ...nextConfig, enabled: false, openAnalyzer: false });
