// @ts-check
import withPWA from 'next-pwa';

// Create a simple base configuration
const nextConfig = {
  reactStrictMode: true,
};

// Only apply PWA in production to avoid conflicts with Turbopack
const isProd = process.env.NODE_ENV === 'production';

// Export the final configuration
export default isProd 
  ? withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: false
    })(nextConfig) 
  : nextConfig; 