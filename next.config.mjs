import sentryConfig from '@sentry/nextjs/config';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
};
nextConfig.images = {
  unoptimized: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'raymongarcia.github.io',
      pathname: '/my-portfolio/**',
    },
  ],
};

export default sentryConfig.withSentryConfig(nextConfig);