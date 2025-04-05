// @ts-check
import withPWA from 'next-pwa';

// Create a simple configuration that works with Next.js and PWA
const config = {
  reactStrictMode: true,
};

// Check if we're using Turbopack
const usingTurbopack = process.env.TURBOPACK === '1';

// Apply the PWA wrapper with its own separate configuration
// Only if we're not using Turbopack in development
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(config); 