import sentryConfig from '@sentry/nextjs/config';
/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'raymongarcia.github.io',
      pathname: '/my-portfolio/**',
    },
  ],
};

export default sentryConfig.withSentryConfig(nextConfig);