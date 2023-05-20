/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  // images: {
  //   domains: [
  //     "https://firebasestorage.googleapis.com/v0/b/my-portfolio-4bcd3.appspot.com/o/",
  //   ],
  // },
  // images: {
  //   domains: ["https://firebase.google.com/docs/storage"],
  //   loader: "default",
  //   path: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-4bcd3.appspot.com/o/",
  // },
  images: {
    domains: ["https://firebase.google.com/docs/storage"],
  },
};
