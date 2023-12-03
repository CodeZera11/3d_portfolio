/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;

// module.exports = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(glb)$/i,
//       type: 'asset/resource',
//     });

//     return config;
//   },
// };
