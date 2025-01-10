/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'antd',
  '@ant-design/icons',
  'rc-util',
  'rc-pagination',
  'rc-picker',
  'rc-table'
]);

module.exports = withTM({
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false,
      },
      type: 'javascript/auto',
    });

    return config;
  },
});
