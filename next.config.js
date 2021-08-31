const path = require('path');

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://http2.mlstatic.com/',
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
};
