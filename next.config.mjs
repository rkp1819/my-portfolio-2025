// @ts-check
import withPWA from 'next-pwa';

// Determine if we're using Turbopack
const usingTurbopack = process.env.TURBOPACK === '1';

// Create a simple configuration that works with Next.js
const config = {
  reactStrictMode: true,
};

// Only apply PWA wrapper when not in development or when not using Turbopack
const finalConfig = process.env.NODE_ENV === 'development' && usingTurbopack
  ? config
  : withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development'
    })(config);

export default finalConfig; 