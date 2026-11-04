import {withSentryConfig} from '@sentry/nextjs';
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

export default withSentryConfig(nextConfig);