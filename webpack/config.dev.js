const { merge } = require('webpack-merge');
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  entry: ['react-hot-loader/patch', baseConfig.entry],
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 3000,
  },
});
