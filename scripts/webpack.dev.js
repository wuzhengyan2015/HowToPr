const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');
const path = require('path');

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    hot: true,
    compress: true,
    port: 3001,
    open: true,
    historyApiFallback: true
  },
};

module.exports = merge(devConfig, baseConfig);
