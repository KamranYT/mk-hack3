// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//     images: {
//       domains: ["cdn.sanity.io"]
//     },
//   };
  
//   module.exports = nextConfig;
  
// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config) => {
    config.cache = false; // Disable Webpack cache
    return config;
  },
};

module.exports = nextConfig;
