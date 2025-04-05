// @ts-check
import withPWA from 'next-pwa';

// Create a simple configuration that works with Next.js and PWA
const config = {
  reactStrictMode: true,
};

// Apply the PWA wrapper with its own separate configuration
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(config); 