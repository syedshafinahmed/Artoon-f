// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["flowbite.s3.amazonaws.com"],
//      // allow external images from Flowbite
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        // optional: you can add pathname if you only want specific folders
        // pathname: '/path/to/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
