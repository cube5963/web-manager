/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /node_modules\/rc-util\/es/,
      resolve: {
        fullySpecified: false,
      },
    });

    config.module.rules.push({
      test: /node_modules\/antd\/es/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config
  },
}
