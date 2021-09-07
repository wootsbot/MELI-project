const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: 'public',
  },
  images: {
    loader: 'imgix',
    path: 'https://http2.mlstatic.com/',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    modules: true,
    camelCase: true,
    exportLocalsConvention: 'camelCase',
    modules: {
      mode: 'local',
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  },
  productionBrowserSourceMaps: true,
});
